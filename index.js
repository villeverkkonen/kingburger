const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const server = http.createServer(app)
const path = require('path')
const mongoose = require('mongoose')
const burgerRouter = require('./controllers/burger')
const ingredientRouter = require('./controllers/ingredient')

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  keepAlive: 1000,
  connectTimeoutMS: 30000,
  reconnectTries: 30,
  reconnectInterval: 2000
}

mongoose
  .connect(config.mongoUrl, options)
  .then(() => {})
  .catch(err => {
    console.log(err)
  })
mongoose.Promise = global.Promise

app.use(express.static(__dirname + '/frontend/dist/kingburger'))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('public'))
app.use(middleware.logger)
app.use('/api/burgers', burgerRouter)
app.use('/api/ingredients', ingredientRouter)

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/frontend/dist/kingburger/index.html'))
})

app.use(middleware.error)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close()
})