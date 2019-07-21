const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const json = require('body-parser');

const PORT = process.env.PORT || 4000;

const app = new express();

dotenv.config();
app.use(compression);
app.use(cors);
app.use(json);

app.put('/movieDump', postMovieDump);

app.listen(PORT, err => {
	if (err) {
		console.error(err);
	} else {
		mongoose
			.connect(process.env.MONGO, { useNewUrlParser: true })
			.then(() => console.log(`The Server + Mongo are running on Port ${PORT}`))
			.catch(err => console.error(err));
	}
});
