const GetData = require('./getInfo');
const express = require("express");
const app = express();

let respuesta = {
    status: 200,
    mensaje: '',
    body: {}
}

app.get('/', async function (req, res){
    let info = await GetData.search();
    console.log("info: ", info)
    respuesta.mensaje = 'Easy Get';
    respuesta.body = info;
    res.send(respuesta);
});

app.listen(3000, () => {
 console.log("Server Iniciado en el puerto 3000");
});