const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => {
        res.render('createAccessory')
    })
    .post(async (req, res) => {
        const data = req.storage.bodyData()
        try {
            await req.storage.createAccessory(data)
            res.redirect('/products')
        } catch (error) {
            console.log(error, "Failed to create Accessory");
            res.redirect('/accessory')
        }
    })
module.exports = router