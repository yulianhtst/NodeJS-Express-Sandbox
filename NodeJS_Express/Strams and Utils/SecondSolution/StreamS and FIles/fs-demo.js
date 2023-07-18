// const fs = require('fs').promises
const fs = require('fs')

// const file1 = fs.readFileSync('./file.txt', 'utf-8')
// console.log(file1);

// fs.readFile('./file.txt', 'utf-8', (err, data) => {
//     console.log(data);
// })

// async function start() {
//     const data = await fs.readFile('./file.txt', 'utf-8',)
//     console.log(data);
// }
// start()

// const list = fs.readdirSync('./')
// console.log(list);

fs.writeFileSync('./output.txt', 'Hello again!')