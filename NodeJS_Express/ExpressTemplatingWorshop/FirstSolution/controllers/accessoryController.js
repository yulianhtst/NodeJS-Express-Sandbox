const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => {
        req.storage.createAccessory()
        res.render('createAccessory')
    })
    .post((req, res) => {
        res.redirect('/products')
    })
module.exports = router