const { Router } = require('express')
const router = Router()
const fs = require('fs')

router.get('/', (req, res) => {
    res.redirect('/')
})
router.get('/create', (req, res) => {
    res.render('create')
})
router.post('/create', (req, res) => {
    console.log(req.body);

    fs.writeFile('./database.json', '1', (err) => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect('/products')
})
router.get('/details/:_id', (req, res) => {
    res.render('details')
})

module.exports = router