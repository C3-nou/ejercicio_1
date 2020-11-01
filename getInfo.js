const fetch = require('node-fetch');
async function search () {
    let response = await fetch('https://www.datos.gov.co/resource/gt2j-8ykr.json');
    let covidData = await response.json();

    let infoFiltered = {
        'male': {
            '0_20': setInfo(covidData, "M", 0, 20),
            '20_40': setInfo(covidData, "M", 19, 40),
            '40_n': setInfo(covidData, "M", 39, Infinity)
        },
        'female': {
            '0_20': setInfo(covidData, "F", 0, 20),
            '20_40': setInfo(covidData, "F", 19, 40),
            '40_n': setInfo(covidData, "F", 39, Infinity)
        },
    };
    return infoFiltered;
}

function setInfo(info, genero, min, max){
    return info.filter(
        data => data.sexo == genero && 
            parseInt(data.edad) > min && 
            parseInt(data.edad) < max   
    )
}

module.exports = {
    search
}