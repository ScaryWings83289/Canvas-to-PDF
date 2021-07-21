const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

const pdfTemplate = require('./index.js');

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port: ${PORT}`);
});