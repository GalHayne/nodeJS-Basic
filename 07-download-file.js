const ansService = require('./service/ans-service');

url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZQg3Awasay0EwBAH9VxiLDOjKGVu7wY3jg&usqp=CAU'

ansService.download(url, 'download/baba.gif')
    .then(() => {
        console.log('loaded!!');
    })