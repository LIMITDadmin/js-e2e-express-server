const express = require('express');
const path = require('path');
const utils = require('./utils');

// fn to create express server
const create = async () => {

    // server
    const app = express();
   
    app.use(utils.ignoreFavicon);
    
    // Log request
    app.use(utils.appLogger);

    // root route - serve static file
    app.get('/', (req, res) => {
        return res.sendFile(path.join(__dirname, '../client/public/src/index.js'));
    });
    app.get('/express_backend', (req, res) => { //Line 9
        res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
      }); //Line 11

    // Catch errors
    app.use(utils.logErrors);
    app.use(utils.clientErrorHandler);
    app.use(utils.errorHandler);

    return app;
};

module.exports = {
    create
};
