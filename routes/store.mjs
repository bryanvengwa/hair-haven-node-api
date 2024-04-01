import express from 'express'
import * as productController from '../controllers/products.mjs'

const router = express.Router();

router.get('/products',productController.getProducts)


 
export default router;