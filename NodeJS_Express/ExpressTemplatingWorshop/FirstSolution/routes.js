const productRoutes = require('./controllers/productController')
const aboutRoute = require('./controllers/aboutController')
const { Router } = require('express')
const router = Router()

// router.route()


router.use('/', productRoutes)
router.use('/about', aboutRoute)

// router.use('/something', (req, res) => {
//     res.render('404')
// })

module.exports = router