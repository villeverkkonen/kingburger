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
const path = require('path')

app.use(express.static('frontend/dist/kingburger'))
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

app.get('*', function(req, res) {
  res.sendFile(path.join('/frontend/dist/kingburger/index.html', { root: '.' }))
})

app.use(middleware.error)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
