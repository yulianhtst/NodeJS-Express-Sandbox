const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.redirect('/')
})

router.route('/create')
    .get(async (req, res) => {

    })
    .post(async (req, res) => {
        const cars = await req.storage.getAll()

    })

router.get('/details/:_id', (req, res) => {
    res.render('details')
})

module.exports = router