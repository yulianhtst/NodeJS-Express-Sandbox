const { engine } = require('express-handlebars')
const express = require('express')
const services = require('../services/index')


function setupExpress(app) {
    //-----------MIDDLEWARE--------------------------

    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('public'))
    app.use(services())

    //-----------------------------------------------

    app.engine('hbs', engine({ extname: 'hbs' }))
    app.set('view engine', 'hbs')

}

module.exports = setupExpress