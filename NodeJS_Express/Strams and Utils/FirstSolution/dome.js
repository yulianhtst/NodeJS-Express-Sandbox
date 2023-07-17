const fs = require('fs')

const readStream = fs.createReadStream('./View/cats.html', 'utf-8')
const writeStream = fs.createWriteStream('./write.txt')

readStream.pipe(writeStream)
// writeStream.write('Hello World')

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
//     console.log(chunk);
//     writeStream.end()
// })

// writeStream.on('finish', () => {
//     console.log('writing ended');
// })
// readStream.on('end', () => {
//     console.log('reading ended');
// })

