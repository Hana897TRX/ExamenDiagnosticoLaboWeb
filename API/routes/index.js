const express = require('express')

const user = require('./user.router')

function routerApi(app) {
    app.use('/api/', user)
}

module.exports = routerApi