const http = require('http')
const url = require('url')
const pubSub = require('./pubSub')

//Класа ULR ни дава директен достъп до href,protocol,username,password,host,hostname,search,SearchParams[Същотото като querryString],hash
// const url = new URL('/catalog?page=4#pricing', 'http://localhost:5000')
const fs = require('fs')
const queryString = require('querystring')
const port = 5000;
const names = []

//pub/sub example
const onHomeRequest = (name) => {
    if (names.includes(name)) {
        console.log(`Name ${name} hello again `);
    } else {
        console.log(`We have new cat - ${name}`);
        names.push(name)
    }
    console.log(`We have new Cat - ${name}`);
}

function requestHavndler(req, res) {
    let reqUrl = url.parse(req.url)
    let params = queryString.parse(reqUrl.query)


    switch (reqUrl.pathname) {
        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            fs.readFile('./View/cats.html', (err, data) => {
                if (err) {
                    console.log('Error', err);
                    return;
                }
                // console.log(data);
                res.write(data)
                res.end()
            })
            //pub/sub example
            onHomeRequest(params.name)
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