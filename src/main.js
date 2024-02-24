const express = require('express');
const app = express();
const port = 3000; // Puerto en el que escuchará el servidor

// Importar los controladores
const userController = require('./controller/userController');

// Usar los controladores
app.use('/users', userController);

// info - health check
app.get('/', (req, res) => {
    res.send('¡El servidor está en funcionamiento!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
