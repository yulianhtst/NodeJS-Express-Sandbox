const http = require('http')
const url = require('url')
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
            res.write('<h1>First Page</h1>')
            break;
        case '/second':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.write('Second Page')
            break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            })
            break;
    }   
    res.end()
}

const app = http.createServer(requestHavndler)
app.listen(port, () => console.log(`Server is listenig on port :${port}`));