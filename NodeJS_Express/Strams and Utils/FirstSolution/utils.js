const fs = require('fs')

function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(parh, (err, data) => {
            if (err) {
                return reject(err)
            }

            resolve(data)
        })
    })
}
module.exports = readFileAsync