const Accessory = require('../models/Accessory')

async function createAccessory(data) {
    await Accessory.create(data)
}
async function deleteAccessoryById(id) {
    await Accessory.findOneAndDelete(id)
}
module.exports = {
    createAccessory,
    deleteAccessoryById,
}