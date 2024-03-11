const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if(req.url === '/'){
        res.statusCode = 200;
        res.end('Home Page');
    }else if(req.url === '/about'){
        res.statusCode = 200;
        res.end('About Page');
    }
});

server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');