const Car = require('../models/Car')


async function getAll({ search, from, to }) {
    const options = {};

    if (search) {
        options.name = new RegExp(search, 'i');
    }
    if (from) {
        options.price = { $gte: Number(from) }
    }
    if (to) {
        if (!options.price) {
            options.price = {}
        }
        options.price.$lte = Number(to)
    }

    return await Car.find(options).lean()
}

async function editCar(id, data) {
    const car = await Car.findByIdAndUpdate(id, data)
    console.log(car);
}

async function getById(id) {
    const car = await Car.findById(id).lean()

    if (car) {
        return car
    } else {
        undefined;
    }
}

async function createCar(data) {
    //Ако няма да използваме релации:const car = await Car.create(data)
    const result = new Car(data)
    await result.save()
}

async function deleteCar(id) {
    await Car.findByIdAndDelete(id)
}



module.exports = () => (req, res, next) => {
    function bodyData() {
        return {
            name: req.body.name || 'No name',
            description: req.body.description || 'No description',
            imageUrl: req.body.imageUrl || 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg',
            price: parseFloat(req.body.price.replace(',', '')) || 0,
        }
    }
    req.storage = {
        getAll,
        getById,
        createCar,
        deleteCar,
        editCar,
        bodyData,
    }
    next()
}