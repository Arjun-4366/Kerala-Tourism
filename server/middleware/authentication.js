const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel')

let authenticate = async(req,res,next)=>{
    let token
    if(
        req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ){
        try{
        token = req.headers.authorization.split(" ")[1]
        const tokenDecoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user =  await userModel.findById(tokenDecoded.id).select("-password")
        next()
        }
        catch{
         res.status(401).json('Not autherized')
         throw Error('Not autherized')
       
        }
    }
    if(!token){
        res.status(401).json('not authorized,no token')
        throw new Error('not authorized,no token')
    }
    
}   

module.exports = {authenticate}