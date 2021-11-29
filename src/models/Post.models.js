const mongoose = require('mongoose')
const {Schema}= mongoose

const PostSchema = new Schema({
    desc: String ,
    photo: String,
    date: {type:Date, default:Date.now},
    userId: Number ,
    like: Number,
    comment: Number,

})

//convertir a modelo 
module.exports= mongoose.model('post',PostSchema)
