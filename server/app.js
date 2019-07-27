const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const json = require('body-parser');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;

const PORT = process.env.PORT || 4000;

const getUser = require('./controllers/getUser');
const postMovieDump = require('./controllers/postMovieDump');

const app = new express();

dotenv.config();
app.use(compression);
app.use(cors);
app.use(json);
app.use(bodyParser.urlEncoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((user, done) => user.findById(userId, (err, user) => done(err, user)));

const local = new LocalStrategy((email, password, done) =>
	User.findOne({ email })
		.then(user => {
			if (!user || !user.validPassword(password)) {
				done(null, false, { message: 'The username or password is incorrect.' });
			} else {
				done(null, user);
			}
		})
		.catch(error => done(error))
);

passport.use('local', local);

app.post('/movieDump', postMovieDump);
app.get('/getUser', require('./getUser')(passport));

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
