// crear los parametros de la conexion de la database
const mongoose = require('mongoose')
URI=('mongodb://localhost/dbSocialRed')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=>console.log('Base de datos conectada ',db.connection.name))

module.exports=mongoose