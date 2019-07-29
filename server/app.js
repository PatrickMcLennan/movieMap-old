const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

const postUser = require('./controllers/postUser');
const postMovieDump = require('./controllers/postMovieDump');

const app = new express();

dotenv.config();
app.use(compression());
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/movieDump', postMovieDump);
app.post('/postUser', postUser);

app.listen(PORT, err => {
	if (err) {
		console.error(err);
	} else {
		mongoose
			.connect(process.env.MONGO, { useCreateIndex: true, useNewUrlParser: true })
			.then(() => console.log(`The Server + Mongo are running on Port ${PORT}`))
			.catch(err => console.error(err));
	}
});
