const express = require('express')

const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)
routes.post('/product', ProductController.create)
routes.get('/products/:id', ProductController.show)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)

module.exports = routes
