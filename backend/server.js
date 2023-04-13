import express from 'express';

import path from 'path';

const app = express();
const port = 3000;
const webApp = express();
const webPort = 80;
// const history = require('connect-history-api-fallback');


// webApp.use(history());

webApp.use(express.static('./frontend/dist'));

function pLog(msg, protocol) {
let date = new Date().toISOString();
    console.log(`[${date}] ${protocol}: ${msg}`);
}


webApp.listen(webPort, () => {
    pLog(`Webserver listening on port ${webPort}`, 'HTTP');
});