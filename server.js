const express = require('express');
const app = express()

//endpoint
app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/public/resources/views/index.html")
});

//routing
app.use('/src', express.static(__dirname+"/src"));
app.use('/public', express.static(__dirname+"/public"))
app.use('/node_modules', express.static(__dirname+"/node_modules"))

//listening
app.listen(5000, ()=>{
    console.log("Iniciando el servidor Node...")
    console.log("El servidor Node se está ejecutando.")
});