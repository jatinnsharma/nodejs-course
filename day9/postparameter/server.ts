// import express module 
import * as express from 'express'

// import body-parser module
// body-parser module used to read the post parameters 
import * as bodyparser from 'body-parser'

// create the res object
let app:any = express();
// this rest onject used to develop the rest services GET POST PUT DELETE

//  MINE TYPE - the communication between client and server 
app.use(bodyparser.json());
// the communication langauge between client and server is json in this case


// receive form data form client and parse it 
app.use(bodyparser.urlencoded({})) 
//  urlencoded => form data from client side 
// extended:false  => read the form data 

// authorization code 
const auth:any = (req:any,res:any,next:any):any=>{
    // Generally authorization code is present
    let allHeaders:any = req.headers;
    let token:any = allHeaders.token;
    if(token==='nodejs'){
        next();//authorization is success
    }else{
        res.status(401).json({auth:'fail'});
    }
}

app.post('/login',[auth],(req:any,res:any):any=>{
    if(req.body.uname=='admin' && req.body.uname==='admin'){
        res.status(200).json({login:'success'});
    }else{
        res.status(401).json({login:'fail'});
    }
}
)

app.listen(process.env.PORT,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('server started successfully');
    }
})
