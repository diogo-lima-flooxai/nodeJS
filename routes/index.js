let express = require('express');
let routes = express.Router();

routes.get('/',(req, res)=>{
  res.statusCode = 200;
     res.setHeader('Content-Type', 'text/html')
     res.end('<h1>Olá</h1>');
 });

// exportando route, para o arquivo index.js (principal)

 module.exports = routes;