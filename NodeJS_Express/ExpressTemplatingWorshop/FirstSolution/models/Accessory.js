const { Schema, model } = require('mongoose')

const accessorySchema = new Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number }
})

const Accessory = model('Accessory', accessorySchema)

module.exports = Accessory