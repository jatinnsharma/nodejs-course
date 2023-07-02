import * as express from 'express'
import transactions from './transaction'
import accounts from './accounts'

// create rest services
let app : any = express();
app.use('/module1',transactions);
app.use('/module2',accounts);
app.listen(8080,()=>{
    console.log('Server start');
})


// http://localhost:8080/module1  -> request go to translation and run default req
// http://localhost:8080/module1/jatin
// http://localhost:8080/module2    (GET)
// http://localhost:8080/module2    (POST)