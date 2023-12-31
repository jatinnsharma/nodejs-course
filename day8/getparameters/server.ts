//http://localhost:8080/login?uname=admin&upwd=admin
// req.query.uname 
// req.query.upwd
import * as express from 'express';

let app:any = express();

// authorization
let auth = (req:any,res:any,next:any):any=>{
    let allHeaders = req.headers;
    if(allHeaders.token === 'ashokIT'){
        next()
    }else{
        res.status(500).json({auth:'fail'});
    }
}

// authentication
app.get('/login', [auth], (req:any, res:any):any => {
    if (req.query.uname === "Jatin" && req.query.upwd === 'Jatin') {
        res.status(200).json({ login: 'success' });
    }
    else {
        res.status(400).json({ login: 'failed' });
    }
});

app.get('/',(req:any,res:any):any=>{
    res.sendFile('D:/nodejs-course/day8/getparameters/index.html');
});

app.listen(8081, function () {
    console.log("Sever start");
});