import express from 'express';
import * as productController from '../controllers/products.mjs';
import * as cartController from '../controllers/carts.mjs';

const router = express.Router();

router.get('/products', productController.getProducts);
router.get('/cart', cartController.createCart);

export default router;
