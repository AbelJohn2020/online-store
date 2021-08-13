const base_uri = "https://kqxty15mpg.execute-api.us-east-1.amazonaws.com/";
const url_products = `${base_uri}products`;
const url_buyers = `${base_uri}buyers`;
const url_transactions = `${base_uri}transactions`;
const csvtojson = require('csvtojson');
const request = require('request');
const requPromise = require('request-promise');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs-extra');
const axios = require("axios");

module.exports = {
    getDataProducts: function () {
        const csvStr = request.get(url_products);

        return csvtojson({delimiter: "'", noheader:true, output:'json', headers:['id', 'name', 'price']})
            .fromStream(csvStr)
            .subscribe((csv)=> csv)
    },

    getDataBuyers: function () {
        return fetch(url_buyers)
                .then( res => res.json())
                .then( data => data)
                .catch(e => console.log(e))
    },

    getDataTransactions: async function () {
      const res = await axios(url_transactions);
      // get line by line
      const lines = res.data.split("\u0000\u0000");
      // remove parenthesis
      const removeParenthesis = lines.map( line => line.replace(/[()]/g, ""));
      // get data by line
      const splitLines = removeParenthesis.map((line) => line.split("\u0000"));
      // get array in the products id area
      const getArrayProducts = splitLines.map(line => {
        return line.map( element => {return (element.includes(',')) ? element.split(',') : element})
      })
      // convert transaction array to transaction object
      const convertArrByObj = getArrayProducts.map( transaction => Object.assign({}, transaction));

      //rename keys
      const renameKeysOfTransactionsItems = convertArrByObj.map( item => {
        return {'id': item['0'], 'buyer id': item['1'], 'ip': item['2'], 'device': item['3'], 'product ids': item['4']}
      })
      
      return renameKeysOfTransactionsItems;
    }
}

// laura rojas 
// viviana Calvo
// jorge

// miercoles 4pm