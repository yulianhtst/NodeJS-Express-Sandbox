const productRoutes = require('./controllers/productController')
const homeController = require('./controllers/homeController')
const accessoryController = require('./controllers/accessoryController')
const authController = require('./controllers/authController')

const { Router } = require('express')
const router = Router()

// router.route()


router.use('/', homeController)
router.use('/auth', authController)
router.use('/products', productRoutes)
router.use('/accessory', accessoryController)

router.use('*', (req, res) => {
    res.render('404')
})

module.exports = router