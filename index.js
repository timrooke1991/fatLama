const express               = require('express');
const app                   = express();
const bodyParser            = require('body-parser');
const routes                = require('./config/routes');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(customResponses);
app.use('/api', routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Express has started on port: ${port}`));

