const fs = require('fs').promises
const filePath = './services/database.json'
const uniqid = require('uniqid')

async function read() {
    try {
        const file = await fs.readFile(filePath)
        return JSON.parse(file)
    } catch (error) {
        console.log('File failer to open ', error);
        process.exit(1)
    }
}
async function write(data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data))
    } catch (error) {
        console.log('File failer to open ', error);
        process.exit(1)
    }
}

async function getAll() {
    const data = await read()
    return Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, { id }, v))
}

async function getById(id) {
    const data = await read()
    const car = data[id]

    if (car) {
        return Object.assign({}, { id }, car)
    } else {
        undefined;
    }
}
async function createCar(data) {
    const cars = await read()
    let id= 'xxxx-xxxx-xxxx'.replace(/x/g, () => (Math.random() * 16 | 0))

    cars[id] = data

    await write(cars)
}



module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createCar,
    }
    next()
}