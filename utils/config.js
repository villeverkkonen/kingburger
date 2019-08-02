if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const port = process.env.PORT;
const mongoUrl = process.env.MONGODB_URI
const pusherAppId = process.env.PUSHER_APP_ID
const pusherKey = process.env.PUSHER_KEY
const pusherSecret = process.env.PUSHER_SECRET
const pusherCluster = process.env.PUSHER_CLUSTER

module.exports = {
  port,
  mongoUrl,
  pusherAppId,
  pusherKey,
  pusherSecret,
  pusherCluster
}