const mongoose = require('mongoose')
const Gencode = require('./gencode')
const Log = require('./log')
mongoose.set('debug', true)
mongoose.connect('mongodb://standbymik:mik123456@119.59.116.169/kankarnlog?authSource=admin')
const db = mongoose.connection

db.once('open', function () {
    console.log('connected')
})

module.exports = {
    Gencode,
    Log
}