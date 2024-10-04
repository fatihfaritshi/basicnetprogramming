const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=29e19e8ca352969ba2783c66a43acdb7&query=-0.8973155212474699,100.35064514768379'
request({ url: url }, (error, response) => {
    //console.log(response)
    const data = JSON.parse(response.body)
    //console.log(data)
    console.log(data.current)
    //console.log(data.current.temperature)
})