const express = require('express')

const parserResponse = require('./bodyParser');
const routes = require('./routes');
const app = express()
const PORT = 5000


parserResponse(app)
routes(app);

app.listen(PORT)