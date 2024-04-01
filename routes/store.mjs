import express from 'express'
import * as productController from '../controllers/products.mjs'

const router = express.Router();

router.get('/products',(request , response) => {
    response.send("products");
})


 
export default router;