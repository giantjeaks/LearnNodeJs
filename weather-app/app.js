const request = require('request')

const url = 'https://api.darksky.net/forecast/c0cb204168263f713c23cfb11fc7a9d6/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log('It is currently ' + response.body.currently.temperature + ' degrees out. There is a '+ response.body.currently.precipProbability + '% Chance of rain')
})