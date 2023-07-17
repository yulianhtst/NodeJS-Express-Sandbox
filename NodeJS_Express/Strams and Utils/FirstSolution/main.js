//Така се пише ако искаме само да се изпълни файла
require('./init')
//Класа ULR ни дава директен достъп до href,protocol,username,password,host,hostname,search,SearchParams[Същотото като querryString],hash
// const url = new URL('/catalog?page=4#pricing', 'http://localhost:5000')
const http = require('http')
const url = require('url')
const fs = require('fs')
const queryString = require('querystring')

const events = require('events')
const pubSub = require('./pubSub')
// const { readFileAsync } = require('./utils')
const util = require('util')

const port = 5000;

//Готова библиотека
const readFileAsync = util.promisify(fs.readFile);

//Добавяме нова ф-я която ще се изпълни паралелно с другата
const catLogger = (name) => {
    console.log(`We have new cat ${name}`);
}
pubSub.subscribe('cats', catLogger)

let eventEmiter = new events.EventEmitter()
eventEmiter.on('cats', (name) => {
    console.log(`Event emiter ${name}`);
})


function requestHavndler(req, res) {
    let reqUrl = url.parse(req.url)
    let params = queryString.parse(reqUrl.query)

    // const readStream = fs.createReadStream('./View/cats.html', { highWaterMark: 20, encoding: 'utf-8' })


    switch (reqUrl.pathname) {
        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            // readStream.on('data', (chunk) => res.write(chunk))
            // readStream.on('end', () => res.end())

            // readStream.pipe(res)

            //async files
            // fs.readFile('./View/cats.html', { encoding: 'utf-8' }, (err, data) => {
            //     if (err) {
            //         return res.end()
            //     }
            //     res.write(data)
            //     res.end()
            // })

            //Async reading from file
            readFileAsync('./View/cats.html')
                .then(data => {
                    res.write(data)
                    res.end()
                })


            //pub/sub example
            pubSub.publish('cats', params.name)
            eventEmiter.emit('cats', params.name)

            break;

        case '/dogs':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.write('dogs Page')
            res.end()
            break;

        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            })
            res.end()
            break;
    }
}

const app = http.createServer(requestHavndler)
app.listen(port, () => console.log(`Server is listenig on port :${port}`));