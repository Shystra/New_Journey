const http = require('http');

const app = http.createServer((request, response) => {
    console.log( request.method, request.url );

    if (request.method === 'GET' && request.url === '/'){
        response.write('First request');

    }   else{
        response.writeHead(404, { "Content-Type" : 'text/plain' });
        response.end(`Cannot ${request.method} ${request.url}`)
    }

});

app.listen(3000, () => console.log('Server is running'))