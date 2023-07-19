const express = require('express')
const config = require('./config/config')

const port = config.PORT


const app = express()

app.listen(port, () => console.log(`Server started at port ${port}`));