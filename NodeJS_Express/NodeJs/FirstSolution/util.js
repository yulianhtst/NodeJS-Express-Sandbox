const fs = require('fs')

function openFile(path, req, res) {
    fs.readFile(`${path}.html`, (err, data) => {
        if (err) {
            console.log('Error',err);
            return;
        }

        res.write(data)
        res.end()
    })
}

module.exports=openFile