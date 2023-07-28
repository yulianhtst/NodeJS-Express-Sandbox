const { Schema, model, Types: { ObjectId } } = require('mongoose')

const carSchema = new Schema({
    name: { type: String, required: true, minlength: 1 },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number, required: true },
    accessories: { type: [ObjectId], default: [], ref: 'Accessory' }
})

const Car = model('Car', carSchema)
module.exports = Car 