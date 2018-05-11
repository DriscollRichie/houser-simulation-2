require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controllers/controller')

const app = express()
app.use(bodyParser.json())

let {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
})

app.get('/api/properties', controller.getProperties)
app.post('/api/properties', controller.addProperty)


let port = SERVER_PORT || 3710
app.listen(port, console.log(`Server is listening on port ${port}`))