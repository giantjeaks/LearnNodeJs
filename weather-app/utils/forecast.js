const request = require('request')

const forecast = (lat,long, callback) => {
    const url = 'https://api.darksky.net/forecast/c0cb204168263f713c23cfb11fc7a9d6/' + lat + ',' + long +'?lang=en'
    
    request({ url: url, json: true }, (error,response) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(response.body.error){
            callback('Unable to find location')
        }else{
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a '+ response.body.currently.precipProbability + '% Chance of rain'
        )}
    })
}

module.exports = forecast