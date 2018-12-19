require("dotenv").config();
const bodyParser = require("body-parser");
const request = require('request');
const argv = require('yargs').argv;
const apiKey = process.env.APIKEY;


let city = argv.c || "Miami";
let queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(queryUrl, function (err, response, body) {
  if (err) {
    console.log('error:', error);
  }
  else {
    let response = JSON.parse(body)
    let query = `We currently have ${response.weather[0].main}/${response.weather[0].description} with  a temperature of ${response.main.temp} degrees and a humidity of ${response.main.humidity} in ${response.name}!`;
    console.log(query);
  }
});
