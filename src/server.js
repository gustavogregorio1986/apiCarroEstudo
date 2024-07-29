const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/your-endpoint', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
