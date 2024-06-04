const express = require('express');
const app = express();
const routes = require('./src/Routes/routes'); // Asegúrate de que la ruta a tu archivo de rutas es correcta
const pool = require('./src/Config/dbConfig'); // Asegúrate de que la ruta a tu archivo de configuración de la base de datos es correcta

// Middlewares
app.use(express.json()); // Middleware para manejar solicitudes con cuerpos JSON

// Rutas            
app.use('/api', routes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
