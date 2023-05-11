import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const port = 3000;
const webApp = express();
const webPort = 80;

// create http server from webApp
const server = http.createServer(webApp);

// const history = require('connect-history-api-fallback');


// webApp.use(history());

// TODO: If someone tries to inject a script, send them to the 404 page and send a report to the server
//  which the owner will then receive to his inbox if he loggs in next time


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