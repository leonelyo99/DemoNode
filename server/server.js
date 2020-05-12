require("./config/config");

const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB , 
                {useNewUrlParser: true, useCreateIndex: true } ,
                (err, res)=>{
  if (err) throw err;
  console.log('Base de datos online')
});

app.listen(process.env.PORT, () => {
  console.log(`escuchando el puerto ${process.env.PORT}`);
});
