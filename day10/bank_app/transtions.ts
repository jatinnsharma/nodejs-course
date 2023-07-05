import * as express from 'express'
// create the module 
const transtions = express.Router() 


const auth1:any = (req:any,res:any,next:any):any=>{
    const allheaders= req.headers;
    const token = allheaders.token;
    if(token === 'abc123'){
        next()
    }else{
        res.status(200).json({'message':'fail auth1'})
    }
}
const auth2:any = (req:any,res:any,next:any):any=>{
    const allHeaders = req.headers;
    const wish = allHeaders.wish;
    if(wish === 'hello' ){
        next()
    }else{
        res.status(200).json({'message':'auth failed'})
    }
}
//create the get request 
transtions.get('/',(req:any,res:any):any=>{
    res.status(200).json({'message':'Transtion is doing '})
})

// export 
export default transtions