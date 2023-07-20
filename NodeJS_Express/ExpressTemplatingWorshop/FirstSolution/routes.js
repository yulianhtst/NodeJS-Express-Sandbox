const productRoutes = require('./controllers/productController')
const aboutRoute = require('./controllers/aboutController')
const { Router } = require('express')
const router = Router()

// router.route()
router.use('/', productRoutes)

// Specific route handler for /about
router.use('/about', aboutRoute)

// Catch-all 404 route, place it after other routes
router.use('*', (req, res) => {
    console.log('inside 404');
    // res.render('404')
})


module.exports = router