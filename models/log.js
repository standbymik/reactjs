const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
    url:String,
    ip:String,
    time:String,
    key:String
    
},{ timestamp: true})

module.exports = mongoose.model('Log',logSchema)