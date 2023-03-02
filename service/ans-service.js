const axios = require('axios');
const pets = require('../data/pet.json');
const request = require('request');
const fs = require('fs');

function sayHellow() {
    console.log('Hello');
}

function getAns() {
    return axios.get('https://yesno.wtf/api')
        .then((res) => {
            return res.data;
        })
}

function getPets() {
    return pets;
}

function download(url, fileName) {
    return new Promise((resolve, reject) => {
        request(url)
            .pipe(fs.createWriteStream(fileName))
            .on('close', resolve)
            .on('error', reject)
    });
}

module.exports = {
    sayHellow,
    getAns,
    getPets,
    download,
}
