const express = require('express')
const server = express()
const fs = require('fs')
const PORT = 4040


server.use(express.json())//request will have json body


// Request method
server.get('/',(req,res)=>{
    res.send('hello world');
})

server.get('/welcome.html',(req,res)=>{
    res.send('<h1>Hello welcome bro</h2>');
})
server.get('/welcome.html',(req,res)=>{
    res.send('<h1>Hello welcome bro again</h2>');
})

server.post('/hello',(req,res)=>{
    res.send('hello user');
})
server.post('/hello/:name',(req,res)=>{
    const name = req.params.name
    res.send('hello' + name);
})

// WildCard
server.get('/:filename',(req,res)=>{
    const filename = req.params.filename;

    // query params 
    const query = req.query;
    console.log('Query',query)

    // body params
    const body = req.body;
    console.log('Body',body)
    try{
        const content = fs.readFileSync(`./static/${filename}`,{
            encoding:'utf-8'
        })
        res.send(content)
    }catch(err){
        console.log(err.message)
        res.status(500).send('Something went wrong');
    }
})


server.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
}) 