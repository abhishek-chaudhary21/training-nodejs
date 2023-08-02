const registerController = (req, res) => {
    console.log("test")
    const {fname, lname, email, loginId, password, confPassword, number} = req.body
    console.log( req.body)
    // 	Password and Confirm Password must be same
    if (password !== confPassword) return res.send("Password and confirm Password should match!!")
    res.send("done")
  
  }

  module.export = {
    registerController
  }