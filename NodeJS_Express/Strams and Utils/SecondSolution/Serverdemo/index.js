const http = require('http')
const fs = require('fs');

const port = 5000;

http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)

    if (url.pathname == '/') {
        fs.createReadStream('./static/index.html').pipe(res)
    } else if (url.pathname == '/catalogue.html') {
        fs.createReadStream('./static/catalogue.html').pipe(res)
    }

}).listen(port || 3000, () => console.log(`Server started on ${port}`));
