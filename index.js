const express = require('express');
const controller = require( './controller')

const customerData = [
  {
    fname: 'test',
    lname: 'test',
    email: 'test1@test.com',
    loginId: 'test1',
    password: 'qw',
    confPassword: 'qw',
    number: '1234'
  }
]

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/login.html')
});

app.post('/login', (req, res) => {
  console.log("login")
  const {loginId, password} = req.body
  const id = customerData.filter( data => data.loginId === loginId && data.password === password)
  console.log(id)
  if (!(id?.length)) {
    return res.send("LoginId or password is incorrect!!")
  }
  res.send("logged in")

})

app.get('/register', (req, res) => {
    return res.sendFile(__dirname + '/register.html')
});

app.post('/test', (req, res) => {
  console.log("test")
  const {fname, lname, email, loginId, password, confPassword, number} = req.body
  // 	Password and Confirm Password must be same
  if (password !== confPassword) 
  return res.send("Password and confirm Password should match!!")
  // Login Id and Email must be unique 
  const copyEmails = customerData.filter( data => data.email === email)
  const copyloginIds = customerData.filter( data => data.loginId === loginId)
  console.log(copyEmails, copyloginIds)
  if (copyEmails?.length || copyloginIds?.length) {
    return res.send("LoginId or email is already taken!!")
  }
  customerData.push(req.body)
  res.send("done")

})

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});