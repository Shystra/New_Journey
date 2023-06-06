const http = require('http');

const app = http.createServer((request, response) => {
    response.write('Hello');
    response.end();
});

app.listen(3000, () => console.log('Server is running'))