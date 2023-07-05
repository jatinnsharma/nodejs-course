import * as express from 'express'
import accounts from './accounts'
import transtions from './transtions'
import cards from './cards'

const app = express();

app.use('/accounts',accounts);
app.use('/transtions',transtions);
app.use('/cards',cards)


app.listen(8080,()=>{
    console.log('Server starting')
})

