const productRoutes = require('./controllers/productController')
const aboutRoute = require('./controllers/aboutController')
const { Router } = require('express')
const router = Router()

// router.route()


router.use('/about', aboutRoute)
router.use('/', productRoutes)
// router.use('*', (req, res) => {
//     res.render('404', { layout: false })
// })
module.exports = router