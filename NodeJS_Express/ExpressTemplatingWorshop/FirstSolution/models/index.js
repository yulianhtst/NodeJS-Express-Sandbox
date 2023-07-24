const mongoose = require('mongoose')

const car = require('./Car')

const connectionString = "mongodb://localhost:27017/carbicle"

async function init() {
    try {
        mongoose.connect(connectionString)
        console.log('DB connected');
    } catch (error) {
        console.log(error, 'Error connecting to Database');
        process.exit(1)
    }

}
module.exports = init