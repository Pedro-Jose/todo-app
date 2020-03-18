const mongoose = require('mongoose')

// promise do mongoose usando promise do noderetirar warning
mongoose.Promise = global.Promise

//DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/4.x/docs/connections.html#use-mongo-client
module.exports = mongoose.connect('mongodb://localhost/todo')
