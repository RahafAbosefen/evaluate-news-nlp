var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname);

// Variables for url and api key
const API_KEY = process.env.API_KEY;
console.log(`Your API key is ${API_KEY}`);
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';


//GET Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

//GET test Rout
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// POST Route
app.post('/api/analyse', async (req, res) => {

    const { url } = req.body;
    console.log(`You entered: ${url}`);
    const apiUrl = `${baseURL}?key=${API_KEY}&lang=auto&url=${encodeURIComponent(url)}`;

    try {
        const apiResponse = await fetch(apiUrl);

        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }

        const result = await apiResponse.json();
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log("Error", error);
        res.status(500).send({ error: "Failed to analyze the URL" });
    }
});


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


