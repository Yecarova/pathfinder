const express = require('express');

const app= express();
app.get('/', (req,res)=>{
    res.send('Hola Mundi');
});
app.listen(3000, ()=>{
    console.log("Servidor funcionando");
});