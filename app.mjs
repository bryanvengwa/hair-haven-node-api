import express from 'express';
import bodyParser from 'body-parser';
import storeRoutes from './routes/store.mjs'

const app = express();

app.use(bodyParser.json());

app.get('/', function(req,res){
    console.log('hello world');
    res.send('hello world')
})
// app.use('/api')
app.use('/store', storeRoutes)
export default app;
 