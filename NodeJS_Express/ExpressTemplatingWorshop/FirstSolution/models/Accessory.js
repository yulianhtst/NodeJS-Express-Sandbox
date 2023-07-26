const { Schema, model } = require('mongoose')

const accessorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number, min: 0 }
})

const Accessory = model('Accessory', accessorySchema)

module.exports = Accessory