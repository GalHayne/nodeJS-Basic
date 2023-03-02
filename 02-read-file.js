const fs = require('fs');

// demoSync();
demoNoSync();


///Bad way case sync 
function demoSync() {
    const contents = fs.readFileSync('data/data.txt', 'utf8');
    console.log(contents);
}

//Good way no nned sync !!!!
function demoNoSync() {
    const contents = fs.readFile('data/data.txt', 'utf8', (err, contents) => {
        if (err) {
            return console.log('cant read file');

        } else {
            return console.log('affter callinf readFile');
        }

    });
}