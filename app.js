//Importamos librerias
const express = require('express');
const path = require('path');

//Creamos nuestro servidor
const app = express();

//Servimos archivos estáticos(css,js,imagenes,....)
app.use(express.static(path.join(__dirname,'public')));

//Rutas
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

app.get('/babbage', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/babbage.html'));
});

app.get('/berners-lee', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'));
});
app.get('/clarke', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/clarke.html'));
});
app.get('/hamilton', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/hamilton.html'));
});
app.get('/hopper', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/hopper.html'));
});
app.get('/lovelace',(req,res) => {
    res.sendFile(path.join(__dirname,'/views/lovelace.html'));
});
app.get('/turing', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/turing.html'));
});

//Iniciamos nuestro servicio en el puerto 3000
app.listen(3000);


