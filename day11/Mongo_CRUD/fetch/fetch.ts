// import express module
// express module,used to develop the rest services
// import * as express from 'express'
// import mongodb module
// mongodv moudle used to connect to mongodb database
// import * as mongodb from 'mongodb'
// create the client 
// mongodb follows the "cilent server" architecture
// let jatin = mongosb.MongoClient;
// jatin is the client



// create the module
let fetch express.router().get('/',(req:any,res:any):any=>{
    jatin.connect('url',(err,connection)=>{
        if(err) throw err;
        else{
            // database refer
            let db = connection.db('jatin')
            db.collection('products').find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array)

                }
            })
        }
    })
})



// working 
// mongodb follows the client server architecture
// jatin is the client 

// if jatin wants to connect with database 
// jatin.connect('url')
//if(err) throw err; handle the errr

// throught the connection onwords we need database refers
// database contain products 
// to fetch database we use find function find()
// to store result into array use toArray()
// 
