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

        const car = req.storage.bodyData()

        await req.storage.createCar(car)

        res.status(201).redirect('/products')
    })

router.route('/delete/:_id')
    .get(async (req, res) => {
        const car = await req.storage.getCarById(req.params._id)

        try {
            res.render('delete', { car })
        } catch (error) {
            console.log(error, 'Couldnt load Delete');
        }
    })
    .post(async (req, res) => {
        try {
            await req.storage.deleteCar(req.params._id)
            res.redirect('/products')
        } catch (error) {
            console.log(error, 'Invalid ID');
        }
    })

router.route('/edit/:_id')
    .get(async (req, res) => {
        const car = await req.storage.getCarById(req.params._id)
        res.render('edit', { car })
    })
    .post(async (req, res) => {
        const id = req.params._id
        const data = req.storage.bodyData()

        await req.storage.editCar(id, data)
        res.redirect(`/products/details/${id}`)
    })

router.get('/details/:_id', async (req, res) => {
    const car = await req.storage.getCarById(req.params._id)
    if (car) {
        res.render('details', { car })
    } else {
        res.redirect('/404')
    }
})

router.route('/attach/:_id')
    .get(async(req, res) => {
        //TODO getAllAccessory service 

        const car =await req.storage.getCarById(req.params._id)
        res.render('attachAccessory', { car })
    })
    .post(async (req, res) => {
        //TODO Create a realtion with car 
        //TODO 
    })
module.exports = router