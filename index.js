require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//crear el servidor de express
const app = express();

// configurar CORS
app.use(cors())

//base de datos
dbConnection();

//ZEwqcCvin1EW9mKh
//mean_user
//mongodb+srv://mean_user:*****@cluster0.6jggv.mongodb.net/test?authSource=admin&replicaSet=atlas-tydoi3-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true


//rutas
app.get('/',(req,res)=>{
    res.json({
        ok:true,
        msg:'hola'
    })
})


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto '+process.env.PORT);
})