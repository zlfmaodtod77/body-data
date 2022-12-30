const express = require('express');

const app = express();
const port= 2002;

app.get('/querystring', (req, res) => {
    res.send("querystring page")
});

app.post('/body-formdata', (req, res) => {
    res.send("body-formdata page")
});

app.post('/body-multipart', (req, res) => {
    res.send("body-multipart page")
});

app.post('/body-json', (req, res) => {
    res.send("body-json page")
});

app.listen(port, () => {
    console.log(port, "서버 열림")
});