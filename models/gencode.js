const mongoose = require('mongoose')

const genCode = mongoose.Schema({
    code:String
},{ timestamp: true})

module.exports = mongoose.model('Gencode',genCode)