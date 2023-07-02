// create the sub module
import * as express from 'express';

// to make sub module
// express.Router()
let transactions:any = express.Router();

transactions.get('/',(req:any,res:any):any=>{
    res.status(200).json({'message':'transactions soon.....!'})
});

transactions.get('/jatin',(req:any,res:any):any=>{
    res.status(200).json({'message':'jatin your transaction soon...!'});
})

export default transactions;