import http from 'http';
import app from '../app.mjs';

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
});
