require("dotenv").config();
const bodyParser = require("body-parser");
const request = require('request');
const argv = require('yargs').argv;
const apiKey = process.env.APIKEY;


let city = argv.c || "Miami";
let queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(queryUrl, function (err, response, body) {
  if(err){
    console.log('error:', error);
  }
  else {
    let response = JSON.parse(body)
    let query = `It's currently ${response.weather[0].main} and  a temperature of ${response.main.temp} degrees with a humidity of ${response.main.humidity} in ${response.name}!`;
    console.log(query);
  }
});
