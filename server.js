const http = require('http');
const app = require('./lib/app');
const db = require('./lib/db');

const url = 'mongodb://localhost:27017/world';
db.connect(url);

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
    console.log('Server is running on port', server.address().port);
});
