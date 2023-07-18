const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 5000;

const checkCatIdMiddleware = require('./Middlewares/middleware')

const cats = []


app.engine('hbs', handlebars.engine())
//подаваме за втори параметър името което сме написали горе в енджина
app.set('view engine', 'hbs');

//На адреса > /static < можем да достъпим всичко от подадаената папка в express.static()
//Така може да се изпълняват js файлове и css
app.use('/static', express.static('public'))


app.get('/:name?', (req, res) => {
    let name = 'Pesno'
    //Подава се като пропъртита в react 
    res.render('home', { layout: false, name })

})
app.post('/cats', (req, res) => {
    console.log(`create a cat `);

    // res.statusCode=201
    res.status(201).send('cat Created')
})
app.get('/download', (req, res) => {
    res.download('./views/home.html')
})
app.get('/cats/:catId', checkCatIdMiddleware, (req, res) => {
    if (!/\d+/.test(req.params.catId)) {
        res.status(404).send('You need to specify valid id')
        return;
    }
    res.send(`You are looking at cat ${req.params.catId}`);
})
app.all('/', (req, res) => {
    console.log('All requests');
})





app.listen(port, () => console.log(`This server is running on port ${port}`))