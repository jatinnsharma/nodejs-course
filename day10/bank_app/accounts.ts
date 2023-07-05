import * as express from 'express'
// create the module
const accounts = express.Router()

// create the get requests
accounts.get('/',(req:any,res:any):any=>{
    res.status(200).json({'message':'welcome to accounts'});
})

// login 
accounts.get('/login',(req:any,res:any):any=>{
    if(res.query.uname ==='admin' && res.query.name==='admin'){
        res.status(200).json({'message':'Login success'})
    }else{
        res.status(200).json({'message':'Login Fail'})
    }
})

export default accounts;



