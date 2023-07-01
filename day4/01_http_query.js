// import http module
let http = require('http')
// if the http server import successfully it will return http object.


// import url module 
// url module used to read the query parameters
// url module also predefined module
// url module available along with the node software 
let url = require('url');


// create the httpServer
// createServer()
let server = http.createServer((req,res)=>{
    // set the MINE Type
    // communication language between client and server called as MINE
    res.writeHead(200,{'Content-Type':'text/html'});

    // parse the request
    let obj = url.parse(req.url,true).query;

    if(obj.uname==='jatin' && obj.upwd==='JatinSharma'){
        res.write('login successfully');
    }else{
        res.write('login fail');
    }
    res.end();
})

server.listen(8080)
console.log('Server port number is 8080')