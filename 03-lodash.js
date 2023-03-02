const _ = require('lodash');

function getRandomScore() {
    return Math.round(Math.random() * 100);
}

const result = _.times(5, getRandomScore);
console.log(result);

const posts = [
    { id: '1abc', title: 'First blog post', content: "..." },
    { id: '2abc', title: 'Second blog post', content: "..." },
]

const postMap = _.keyBy(posts, 'id');
const post = postMap['2abc'];

console.log(post);