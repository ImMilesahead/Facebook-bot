'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/test', function (req, res) {
    res.send('Hello world, I am a chat bot. ayyy lmao')
})


// Index route
app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot. ayyy lmow')
})


// for Facebook verification
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})

app.post('/webhook/', function (req, res) {
    let messing_events = req.body.entry[0].messaging
    for (let i = 0; i < messaging_events.length; i++){
	let event = req.body.entry[0].messaging[i]
	let sender = event.sender.id
	if (event.message && event.message.text){
	    let text = event.message.text
	    sendTextMessage(sender, "Text recieved, echo: " + text.substring(0, 200))
	}
    }
    res.sendStatus(200)
})

const token = "EAAHfE3nZCOZAYBAFSQZCAwMZAt5ZCmBDUIR1vtIEm3rt7qaLZAjzlRaIGUS7Es0ydH57Fwttd0FnVWX7O5pvpErFGY6qAXvtociK7JP3fAQJALWclBFq0dZCQqvSAZCybHFVOtEeUZBTUWJvU2eAVuTPiLzQKiZAj6FJnaUbVXIKFHigZDZD"
