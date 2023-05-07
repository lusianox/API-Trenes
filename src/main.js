const express = require ('express');
const app = express();
const morgan = require('morgan');

// Configuraciones
app.set('port', process.env.port || 3000);
app.set('json spaces', 2);

// middlewares (morgan es un middleware y es una función que procesa datos antes que el servidor los reciba)
app.use(morgan('dev')); // me permite ver por consola lo que llega al servidor
app.use(express.urlencoded({extended: false})); // comprender datos input de un formulario (textos)
app.use(express.json()); // método json permite recibir y entender formato json

// Rutas
app.use(require('./routes/main'));
app.use('/api/trenes', require('./routes/trenes')); 

// Esta función inicia el server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

