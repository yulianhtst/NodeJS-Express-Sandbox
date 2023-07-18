const http = require('http')
const fs = require('fs');

const port = 5000;

http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)

    if (url.pathname == '/') {
        res.writeHead(301, {
            Location: '/index.html'
        })
    } else if (url.pathname.slice(-5) == '.html') {
        fs.createReadStream(`./static/${url.pathname}`).pipe(res)
    }

}).listen(port || 3000, () => console.log(`Server started on ${port}`));
