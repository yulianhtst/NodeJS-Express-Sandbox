const http = require('http')

function requestHavndler(req, res) {
    console.log('Server Started');
}

const app = http.createServer(requestHavndler)
app.listen(5000)