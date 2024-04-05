import express from 'express';
import bodyParser from 'body-parser';
import storeRoutes from './routes/store.mjs'

const app = express();

app.use(bodyParser.json());
app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST,PUT, DELETE,PATCH'
    );
    response.setHeader('Access-Control-Allow-Headers','Content-Type', 'Authorization');
    next();
  });

app.get('/', function(req,res){
    console.log('hello world');
    res.send('hello world')
})
// app.use('/api')
app.use('/store', storeRoutes)
export default app;
  