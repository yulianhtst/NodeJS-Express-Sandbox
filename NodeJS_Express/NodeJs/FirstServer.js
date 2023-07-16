const http = require('http')
const url = require('url')
const fs = require('fs')
const queryString = require('querystring')
const port = 5000;

function requestHavndler(req, res) {
    let reqUrl = url.parse(req.url)
    let params = queryString.parse(reqUrl.query)

    console.log(params);
    console.log(reqUrl);

    switch (reqUrl.pathname) {
        case '/first':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            fs.readFile('./Views/first.html', (err, data) => {
                if (err) {
                    console.log('Error');
                    return;
                }
                // console.log(data);
                res.write(data)
                res.end()
            })
            break;
            
        case '/second':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.write('Second Page')
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