const router = require('express').Router()

router.route('/register')
    .get((req, res) => {
        res.render('register')
    })
    .post((req, res) => {
        console.log(req.body);
    })



router.route('/login')
    .get((req, res) => {
        res.render('login')
    })
    .post((req, res) => {
    })

module.exports = router