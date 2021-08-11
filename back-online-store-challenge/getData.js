const base_uri = "https://kqxty15mpg.execute-api.us-east-1.amazonaws.com/";
const url_products = `${base_uri}products`;
const csvtojson = require('csvtojson');
const request = require('request');

module.exports = {
    getDataProducts: function () {
        const csvStr = request.get(url_products);

        return csvtojson({delimiter: "'", noheader:true, output:'json'})
            .fromStream(csvStr)
            .subscribe((csv)=> csv)
            .then(data => data)
            .catch(e => e)
    }
}