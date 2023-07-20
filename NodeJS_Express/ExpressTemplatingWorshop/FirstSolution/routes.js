const productRoutes = require('./controllers/productController')
const homeController = require('./controllers/homeController')
const { Router } = require('express')
const router = Router()

// router.route()


router.use('/', homeController)
router.use('/products', productRoutes)

router.use('*',(req, res) => {
    res.render('404')
})

module.exports = router