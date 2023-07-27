const { createAccessory, deleteAccessoryById } = require('./accessoryService')
const { getAllCars, getCarById, createCar, deleteCar, editCar } = require('./carsService')



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
        createAccessory,
        getAllCars,
        getCarById,
        createCar,
        deleteCar,
        editCar,
        bodyData,
        deleteAccessoryById
    }
    next()
}
