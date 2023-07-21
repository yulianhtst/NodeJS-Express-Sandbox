const { Router } = require('express')
const router = Router()


router.get('/', async (req, res) => {
    const cars = await req.storage.getAll()
    res.render('home', { cars })
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router  