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
        const car = {
            name: req.body.name || 'No name',
            description: req.body.description || 'No description',
            imageUrl: req.body.imageUrl || 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg',
            price: parseFloat(req.body.price.replace(',', '')) || 0
        }
        await req.storage.createCar(car)
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