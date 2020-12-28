const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const apiRouter = require('./routes/api')
const cors = require('cors')
require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', apiRouter)

app.listen(3000, () => {
    console.log('inicio')
});
