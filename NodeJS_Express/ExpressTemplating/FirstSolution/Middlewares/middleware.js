function middleware(req, res, next) {
    console.log('Hello from middleware');

    if (req.params.catId) {
        next()
    }
    res.status(403)
}

module.exports = middleware
