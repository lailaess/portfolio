const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')({origin: true})

const sendGrid = require('@sendgrid/mail')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    next()
})

app.options('/api/*', (req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.send()
})

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
})


app.post('/api/email', (req, res, next) => {
    sendGrid.setApiKey('v0-njcbmTKSlGByKAuRqGA')

    const msg = {
        to : 'laila.essadouqi@gmail.com',
        from: req.body.email,
        subject: 'Message provenant de mon Portfolio',
        text: req.body.message,
        html: '<strong>body text</strong>'
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            })
        })
        .catch(err => {
            console.log('error: ', err);
            res.status(401).json({
                success: false
            })
            
        })
})

app.listen(9090, '0.0.0.0')