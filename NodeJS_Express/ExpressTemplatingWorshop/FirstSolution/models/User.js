const { Schema, model, Types: { ObjectId } } = require('mongoose')

const userSchema = new Schema({
    _id: { type: ObjectId },
    username: { type: String, required: true },
    password: { type: Number, required: true },

})
const User = model('User', userSchema)

module.exports = User 