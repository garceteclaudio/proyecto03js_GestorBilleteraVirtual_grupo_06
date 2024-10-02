const express = require('express');
const path = require('path'); // Importar path para manejar rutas
const app = express();

// Servir archivos estáticos desde la carpeta public
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Endpoint para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/resources/views/index.html"));
});

// Rutas para los archivos HTML
app.get('/verListado.html', (req, res) => {
    res.sendFile(path.join(__dirname, "public/resources/views/verListado.html"));
});

app.get('/masTransacciones.html', (req, res) => {
    res.sendFile(path.join(__dirname, "public/resources/views/masTransacciones.html"));
});

// Iniciar el servidor
const PORT = 5000; // O puedes usar process.env.PORT si lo prefieres
app.listen(PORT, () => {
    console.log("Iniciando el servidor Node...");
    console.log(`El servidor Node se está ejecutando en http://localhost:${PORT}`);
});
