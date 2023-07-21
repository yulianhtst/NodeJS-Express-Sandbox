const express = require('express')

const config = require('./config/config')
const routes = require('./routes')


const app = express()

const port = config.PORT || 5000

require('./config/express')(app)

app.use(routes)

app.listen(port, () => console.log(`Server started at port ${port}`)); 