const { Router } = require('express')
const router = Router()


router.get('/', async (req, res) => {
    const cars = await req.storage.getAllCars(req.query)

    res.render('home', { cars, query: req.query })
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router  