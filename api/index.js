const http = require('http')
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const ingredientDb = require('./db/ingredients')
const server = http.createServer(app)

app.use(express.static(__dirname + '../dist/kingburger'));

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('public'))
app.use(middleware.logger)

app.get('/api/ingredients', (req, res) => {
  res.status(200)
    .send({
      ingredients: ingredientDb
    })
})

app.use(middleware.error)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
