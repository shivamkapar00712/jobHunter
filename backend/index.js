require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const winston = require('winston/lib/winston/config');


require('./app/startup/errors')();
require('./app/startup/db')();
require('./app/startup/routes')(app)


app.get('/',(req,res)=>{
  res.send("welcome to app");
});
app.listen((process.env.PORT || 5000),()=>{
  winston.info(`listning to the port ${process.env.PORT || 5000}`)
});
