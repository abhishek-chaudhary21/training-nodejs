const path = require('path');

const {customerData} = require('../data/customerData')

const indexController = (req, res) => {
    const filepath = path.join(__dirname, '..', 'views', 'login', 'login.html')
    return res.sendFile(filepath)
}

const loginController = (req, res) => {
    console.log("login")
    const {loginId, password} = req.body
    const id = customerData.filter( data => data.loginId === loginId && data.password === password)
    if (!(id?.length)) {
      return res.send("LoginId or password is incorrect!!")
    }
    res.redirect('/products')
}

const getRegisterController = (req, res) => {
    const filepath = path.join(__dirname, '..', 'views', 'login', 'register.html')
    return res.sendFile(filepath)
}

const registerController = (req, res) => {
    const { email, loginId, password, confPassword } = req.body
    // 	Password and Confirm Password must be same
    if (password !== confPassword) 
        return res.send("Password and confirm Password should match!!")
    // Login Id and Email must be unique 
    const copyEmails = customerData.filter( data => data.email === email)
    const copyloginIds = customerData.filter( data => data.loginId === loginId)
    console.log("No copy emails or ids found, registering user")
    if (copyEmails?.length || copyloginIds?.length) {
      return res.send("LoginId or email is already taken!!")
    }
    customerData.push(req.body)
    res.send("User registered!!")
}

const getResetPasswordController = (req, res ) => {
    const filepath = path.join(__dirname, '..', 'views', 'login', 'resetPassword.html')
    return res.sendFile(filepath)
}

const resetPasswordController = (req, res) => {
    const { email, loginId, password, confPassword } = req.body
    // Login Id and Email must match 
    const user = customerData.find( data => data.loginId === loginId)
    if(!user || (user && email !== user?.email))
        return res.send("Incorrect Login or email ID")
    // 	Password and Confirm Password must be same
    if (password !== confPassword) 
        return res.send("Password and confirm Password should match!!")
    user.password = password
    res.send("Updated Password !!!!")
}

module.exports = {
    indexController,
    loginController,
    getRegisterController,
    registerController,
    getResetPasswordController,
    resetPasswordController
}