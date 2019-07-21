const puppeteer = require('puppeteer');
const axios = require('axios');

const reddit = {
	browser: null,
	page: null,

	saveMovies: async movies => {
		axios({
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: movies
		})
			.then(resp => console.log(resp))
			.catch(err => console.error(err));
	},

	parse: async rawPage => {
		const allMovies = await rawPage.evaluate(() => {
			const posts = Array.from(document.querySelectorAll('div[class="thing"]'));
			return posts.map(post => {
				return {
					title: post.querySelector('a[data-event-action="title"]').split(/([1-9])/)[0],
					href: post.querySelector('a[data-event-action="title"]').getAttribute('href'),
					ads: [
						post.querySelector('.stickied-tagline') ? true : null,
						post.querySelector('.promoted-span') ? true : null
					],
					ratings: [],
					quality: [],
					origin: 'Reddit'
				};
			});
		});
		const movies = await allMovies.filter(movie => !movie.ads.includes(true));
		return reddit.saveMovies(movies);
	},

	initialize: async () => {
		reddit.browser = await puppeteer.launch();
		reddit.page = await reddit.browser.newPage();
		await reddit.page.goto(`https://old.reddit.com/r/fullmoviesonyoutube`);
		return reddit.parse(reddit.page);
	}
};

return reddit.initialize();
