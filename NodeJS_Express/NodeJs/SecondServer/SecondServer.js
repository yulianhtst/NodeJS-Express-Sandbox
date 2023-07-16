const http = require('http')
const port = 5000;

const { router, routes } = require('./router')
const openFile = require('./util')

const server = http.createServer(router)

routes['/'] = homeController
routes['/about'] = aboutController
routes['/catalog'] = catalogController

server.listen(port, () => console.log(`Server started on port ${port}`))


function homeController(req, res) {
    openFile('../Views/home', req, res)
}
function aboutController(req, res) {
    openFile('../Views/about', req, res);
}
function catalogController(req, res) {
    openFile('../Views/catalog', req, res);
}
