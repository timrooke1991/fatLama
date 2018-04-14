const express               = require('express');
const app                   = express();
const bodyParser            = require('body-parser');
const routes                = require('./config/routes');
const customResponses       = require('./lib/customResponses');
const errorHandler          = require('./lib/errorHandler');
const { port }              = require('./config/environment');

app.use(bodyParser.json());
app.use(customResponses);
app.use(routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Express has started on port: ${port}`));

module.exports = app;