const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
         unique:true
    },
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true})

module.exports = mongoose.model('user', userSchema)