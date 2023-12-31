const Car = require('../models/Car')


async function getAllCars
    ({ search, from, to }) {
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

async function getCarById(id) {
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

async function attachAccessory(carId, accessoryId) {
    const existing = await Car.findById(carId)

    existing.accessories.push(accessoryId)
    existing.save()
}


module.exports = {
    getAllCars,
    getCarById,
    createCar,
    deleteCar,
    editCar,
    attachAccessory,
}