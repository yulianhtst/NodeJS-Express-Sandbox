const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/create', (req, res) => {
    res.render('create')
})
router.get('/details/:_id', (req, res) => {
    res.render('details')
})

module.exports = router