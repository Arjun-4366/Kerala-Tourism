const mongoose = require('mongoose')
const userModel  = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
    },
    image:{
        type:String,
        data:Buffer
    }

})

module.exports = mongoose.model('Users',userModel)