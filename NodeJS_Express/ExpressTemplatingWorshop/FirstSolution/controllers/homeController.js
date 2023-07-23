const { Router } = require('express')
const router = Router()


router.get('/', async (req, res) => {
    console.log(req.query);
    const cars = await req.storage.getAll(req.query)
    res.render('home', { cars, query: req.query })
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router  