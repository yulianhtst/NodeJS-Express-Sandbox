const Accessory = require('../models/Accessory')
async function getAllAccessory() {
   return await Accessory.find({}).lean()
}

async function createAccessory(data) {
    await Accessory.create(data)
}
async function deleteAccessoryById(id) {
    await Accessory.findOneAndDelete(id)
}
module.exports = {
    createAccessory,
    deleteAccessoryById,
    getAllAccessory,
}