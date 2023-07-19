const express = require('express')
const config = require('./config/config')
const app = express()

const port = config.PORT || 5000

require('./config/express')(app)
// configExpress(app)

//-----------------------------------------------
app.get('/', (req, res) => {
  // res.send('its working')
  res.render('home', { layout: false })
})
//-----------ACTIONS-----------------------------

app.listen(port, () => console.log(`Server started at port ${port}`)); 