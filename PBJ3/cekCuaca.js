const request = require('postman-request');
const urlCuaca = 'http://api.weatherstack.com/current?access_key=29e19e8ca352969ba2783c66a43acdb7&query=-0.8973155212474699,100.35064514768379&units=m';

request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
        console.error('Terjadi kesalahan saat melakukan permintaan:', error);
        return;
    }

    if (response.body.error) {
        console.error('Kesalahan dalam respons:', response.body.error.info);
        return;
    }

    const temperature = response.body.current.temperature;
    const precipitation = response.body.current.precip;
    const weatherDescription = response.body.current.weather_descriptions[0]; // Access the first element of the array

    console.log(`Saat ini suhu diluar mencapai ${temperature} derajat Celsius. 
Kemungkinan terjadinya hujan adalah ${precipitation}%. 
Deskripsi cuaca: ${weatherDescription}.`);
});
