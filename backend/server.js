import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const port = 3000;
const webApp = express();
const webPort = 8080;

// create http server from webApp
const server = http.createServer(webApp);

// const history = require('connect-history-api-fallback');


// webApp.use(history());

webApp.use(express.static('./frontend/dist'));

function pLog(msg, protocol) {
let date = new Date().toISOString();
    console.log(`[${date}] ${protocol}: ${msg}`);
}


server.listen(webPort, () => {
    pLog(`Server listening on port ${webPort}`, 'HTTP');
});

// webApp.listen(webPort, () => {
//     pLog(`Webserver listening on port ${webPort}`, 'HTTP');
// });