import * as express from 'express'
// Create the module
const cards = express.Router()


// create the POST request 
cards.post('/',(req:any,res:any):any=>{
    res.status(200).json({'message':'welcome to the cards'});
})

// Export the module
export default cards;