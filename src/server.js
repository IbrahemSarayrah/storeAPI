'use strict';

const express = require('express');
const cors = require("cors");
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const itemsRoutes = require('./routes/items');

const logger = require('./middleware/logger');

app.use(cors());
app.use(express.json());
app.use(logger);

app.use(itemsRoutes);

app.get('/', (req,res)=>{
  res.status(200).send('Working...');
});


app.get('/bad',(req, res, next)=> {
  next ('Error Bad End Point');
});

app.use('*' , notFoundHandler);
app.use(errorHandler);



module.exports= {
  server: app,
  start : port =>{
    app.listen(port,()=> console.log(`listen on port ${port}`));
  },
};