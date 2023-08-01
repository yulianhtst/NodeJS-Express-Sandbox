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
    // const accessories = await req.storage.getAllAccessory()
    // console.log(accessories);

    const accessoryIdObj = car.accessories
    const idArr = await req.storage.getManyAccessories(accessoryIdObj)

    if (car) {
        res.render('details', { car, idArr })
    } else {
        res.redirect('/404')
    }
})

router.route('/attach/:_id')
    .get(async (req, res) => {
        const carId = req.params._id

        const [car, accessories] = await Promise.all([
            req.storage.getCarById(carId),
            req.storage.getAllAccessory()
        ])

        const availableAccessories = accessories.filter((a) => {
            return !car.accessories.map((x) => x.toString()).includes(a._id.toString())
        });
        n
        res.render('attachAccessory', { car, availableAccessories })
    })
    .post(async (req, res) => {
        const accessoryId = req.body.accessory
        const carId = req.params._id

        req.storage.attachAccessory(carId, accessoryId)

        res.redirect(`/products/details/${req.params._id}`)
    })
module.exports = router