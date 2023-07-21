const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.redirect('/')
})

router.route('/create')
    .get(async (req, res) => {
        res.render('create')
    })
    .post(async (req, res) => {
        req.storage.createCar(req.body)
        res.status(201);
        res.redirect('/products')
    })

router.get('/details/:_id', async (req, res) => {
    console.log(req.params._id);
    const car = await req.storage.getById(req.params._id)
    if (car) {
        res.render('details', { car })
    } else {
        res.redirect('/404')
    }
})

module.exports = router