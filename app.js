const express = require('express')
const app = express()
const { Gencode, Log } = require('./models')
const bodyParser = require('body-parser')
const allowCrossDomain = require('./alloworigin')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/viewlog', async (req,res) => {
    const log = await Log.find()
    res.json(log)
})

app.post('/log', async (req, res) => {
    try {
        const code = await Gencode.findOne({ code: req.body.code })
        if (!code) {
            const e = new Error('code wrong')
            e.name = "wrong"
            throw e
        }
    } catch (e) {
        if (e.name == 'wrong') {
            res.status(400).send(e.message)
            throw e
        }
    }


    const log = await Log.create({
        url: req.body.url,
        ip: req.body.ip,
        time: req.body.time,
        key: req.body.key
    })
    res.json([{ success: true }])
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
