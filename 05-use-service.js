const ansService = require('./service/ans-service');

ansService.sayHellow();

ansService.getAns()
    .then(console.log);

console.log(ansService.getPets()); 