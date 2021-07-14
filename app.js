const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, (req, res) => {
    console.log('Server is running on port: 3000');
});