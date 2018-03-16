const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
     res.send('<h1>Root Dir</h1>');
});

app.listen(3000, () => console.log('Server running on port 3000'));
