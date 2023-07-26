const Accessory = require('../models/Accessory')

async function createAccessory(data) {
    console.log('hello');
    // await Accessory.create(data)
}
module.exports = {
    createAccessory
}


// module.exports = () => (req, res, next) => {
//     req.storage = {
//         createAccessory,
//     }
//     next()
// }


