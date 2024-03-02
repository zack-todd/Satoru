'use strict';

const api_key = 'ad1a6e1a93529de77d288d270d2c78ef';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataServer = function(url, callback, optionalParam) {
    fetch(url).then(respone => respone.json())
    .then(data => callback(data, optionalparam));  
}

export { imageBsaseURL, api_key, fetchDataServer };