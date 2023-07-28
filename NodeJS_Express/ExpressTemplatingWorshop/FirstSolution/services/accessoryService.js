const Accessory = require('../models/Accessory')
async function getAllAccessory() {
    return await Accessory.find({}).lean()
}
async function getAccessoryById(id) {
    const accessory=await Accessory.findById(id).lean();
    if (accessory) {
        return accessory
    } else {
        undefined;
    }
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
    getAccessoryById
}