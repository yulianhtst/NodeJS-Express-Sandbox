const openFile = require('./util')

const routes = {}

function router(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`)

    const handler = routes[url.pathname]
    if (typeof handler == 'function') {
        handler(req, res)
    } else {
        openFile('../Views/default', req, res)
    }
}
function register(pathname, handler) {
    routes[pathname] = handler
}



module.exports = {
    register,
    router
}