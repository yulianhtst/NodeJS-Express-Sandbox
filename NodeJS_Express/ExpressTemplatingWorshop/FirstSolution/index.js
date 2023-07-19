const express = require('express')
const { engine } = require('express-handlebars')
const config = require('./config/config')
const app = express()

const port = config.PORT || 5000
//-----------------------------------------------
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//-----------MIDDLEWARE--------------------------
app.engine('hbs', engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')

//-----------------------------------------------
app.get('/', (req, res) => {
  // res.send('its working')
  res.render('home', { layout: false })
})
//-----------ACTIONS-----------------------------

app.listen(port, () => console.log(`Server started at port ${port}`)); 