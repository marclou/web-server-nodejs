const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
	let reqDate = new Date();
	let reqInfo = req.method + req.url;

	fs.appendFile('log.txt', reqDate + ' : ' + reqInfo + '\n', (err) => {
		if (err) {
			console.log(err);
		}
	});
	next();
});
app.use((req, res, next) => {
	res.render('maintenance.hbs');
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home',
		welcomeMessage: 'Welcome on the main page !',
		date: new Date().getFullYear()
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About',
		date: new Date().getFullYear()
	});
});

app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`));
