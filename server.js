const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
     res.send('<h1>Root Dir</h1>');
});
app.get('/about', (req, res) => {
     console.log(req);
     res.render('about.hbs');
});

app.listen(3000, () => console.log('Server running on port 3000'));
