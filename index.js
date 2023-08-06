const express = require('express')
const path = require('path')
const hbs = require('hbs')

const loginControllers = require( './controllers/loginControllers')
const productControllers = require( './controllers/productControllers')


const app = express();

// middlewares
app.set('view engine', 'hbs')
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// GET routes 
app.get('/', loginControllers.indexController);
app.get('/register', loginControllers.getRegisterController)
app.get('/password/reset', loginControllers.getResetPasswordController)
app.get('/products', productControllers.productController)

// POST routes
app.post('/login', loginControllers.loginController)
app.post('/register', loginControllers.registerController);
app.post('/password/reset', loginControllers.resetPasswordController)
app.post('/products', productControllers.productController)


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});