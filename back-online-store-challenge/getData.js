const base_uri = "https://kqxty15mpg.execute-api.us-east-1.amazonaws.com/";
const url_products = `${base_uri}products`;
const url_buyers = `${base_uri}buyers`;
const csvtojson = require('csvtojson');
const request = require('request');
const fetch = require('node-fetch')

module.exports = {
    getDataProducts: function () {
        const csvStr = request.get(url_products);

        return csvtojson({delimiter: "'", noheader:true, output:'json'})
            .fromStream(csvStr)
            .subscribe((csv)=> csv)
    },

    getDataBuyers: function () {
        return fetch(url_buyers)
                .then( res => res.json())
                .then( data => data)
                .catch(e => console.log(e))
    }
}