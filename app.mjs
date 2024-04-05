import express from 'express';
import bodyParser from 'body-parser';
import storeRoutes from './routes/store.mjs';

const app = express();

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST,PUT, DELETE,PATCH'
  );
  // Corrected the way to set multiple headers
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  next();
});

app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log('hello world');
  res.send('hello world');
});

// Uncommented and corrected the route for '/api'
// app.use('/api', storeRoutes);
app.use('/store', storeRoutes);

export default app;
