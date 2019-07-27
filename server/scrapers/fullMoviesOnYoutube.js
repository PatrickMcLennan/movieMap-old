const puppeteer = require('puppeteer');
const axios = require('axios');

const reddit = {
	browser: null,
	page: null,

	saveMovies: async movies =>
		axios({
			method: 'POST',
			url: 'https://localhost:4000/postMovieDump',
			headers: {
				'Content-Type': 'application/json'
			},
			movies
		})
			.then(res => console.log('it worked'))
			.catch(err => console.error('it did not work')),

	parse: async rawPage => {
		console.log('Subreddit reached, beginning to parse now...');
		const allMovies = await rawPage.evaluate(() => {
			const posts = Array.from(document.querySelectorAll('.thing'));
			return posts.map(post => {
				return {
					title: post
						.querySelector('a[data-event-action="title"]')
						.textContent.split('(')[0]
						.trim(),
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
		console.log('Beginning Reddit Scraper.');
		reddit.browser = await puppeteer.launch();
		reddit.page = await reddit.browser.newPage();
		await reddit.page.goto(`https://old.reddit.com/r/fullmoviesonyoutube`, {
			waitUntil: 'networkidle0',
			timeout: 0
		});
		return reddit.parse(reddit.page);
	}
};

return reddit.initialize();
