const express  = require('express')
const Router = express.Router()
const userController = require('../controller/userController')
const upload = require('../middleware/userImage')



Router.use(express.json())
Router.use(express.urlencoded({extended:true}))

// Router.post('/register',upload,userController.register)    
Router.post(`${process.env.FRONT_END_URL}/register`,upload,userController.register)



module.exports = Router