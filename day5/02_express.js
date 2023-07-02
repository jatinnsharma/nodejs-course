// import the express module
let express = require('express');

// Get,POST,PUT,DELETE...

// create the rest object 
let app = express();
// where app object is the rest object
// where app object used to develop the rest services
// Get,Put,Post,Delete...


// Get request syntax
app.get('/',(req,res)=>{
    res.status(200).json({"message":"default get request...!"})
})
app.get('/demo',(req,res)=>{
    res.status(200).json({"message":"data from mongoDB data soon...!"})
})
 
// Post request syntax
app.post('/',(req,res)=>{
    res.status(200).json({"message":"default post request...!"})
})
app.post('/demo',(req,res)=>{
    res.status(200).json({"message":"data from cassandradb database soon...!"})
})

// argument1 is the path
// argument2 is the callback with req,res  


app.listen(8080,()=>{
    console.log('server started');
})


// http://localhost:8080            (GET) (POST)
// http://localhost:8080/demo       (GET) (POST)