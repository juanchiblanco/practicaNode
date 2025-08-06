const fs = require('fs')
//import fs from 'fs' (esto si fuera con esmodules)

fs.readFile('./listaPersonajes.txt','utf8', (err, data)=>{
    if(err){console.error('Ocurrio un error al intentar abrir el archivo:'+err)}
    console.log('Datos leidos:')
    console.log(data)
})