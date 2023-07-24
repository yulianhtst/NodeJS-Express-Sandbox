const express = require('express')

const config = require('./config/config')
const routes = require('./routes')
const connectDb = require('./models/index')

const port = config.PORT || 5000

init()
async function init() {
    await connectDb()

    const app = express()

    require('./config/express')(app)

    app.use(routes)

    app.listen(port, () => console.log(`Server started at port ${port}`));
}  