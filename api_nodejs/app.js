const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = 'mongodb+srv://usuario_admin:senha_admin_teste@clusterapi.jtfyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//const options = { };
//const options = {reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true};

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };



mongoose.connect(url,options);
//mongoose.set('useCreateIndex',true);

mongoose.connection.on('error', (err) =>{
  console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', (err) =>{
    console.log('Aplicação desconectada do banco de dados: ' + err);
  })


mongoose.connection.on('connected', () =>{
console.log('Aplicação conectada ao banco de dados! ');
})


//Body Parser
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());




const indexRoute = require('./Routers/index');
const usersRoute = require('./Routers/users');

app.use('/',indexRoute);
app.use('/users',usersRoute);






app.listen(3000);
module.exports = app;

console.log("server app.js rodando");