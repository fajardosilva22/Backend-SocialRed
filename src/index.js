// Requerimos las dependencias necesarias e intaladas
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

// configurar puerto
app.set('Port',process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen:'*'}))

app.use('/poster',require('./routes/Post.routes'))


app.listen(app.get('Port'),()=>{
    console.log('hola soy el servidor y estoy por el puerto :',app.get('Port'))
})