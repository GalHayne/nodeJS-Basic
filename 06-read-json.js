const fs = require('fs');

const pets = require('./data/pet.json')
console.log('pets:', pets);



///You dont need to use this function !!!! require know how to do it !!!!
// getJSONfromFile('data/pet.json', (err, pets) => {
//     if (err) {
//         return console.log('Cannot read pets file:', err);
//     } else {

//         return console.log('pets:', pets);
//     }
// });

function getJSONfromFile(fileName, cb) {
    fs.readFile(fileName, (err, data) => {
        if (err) {
            return cb(err);
        }

        let json;
        try {
            json = JSON.parse(data);
        } catch (err) {
            return cb('the json file is fuck check him', err);
        }
        cb(null, json);
    })
}