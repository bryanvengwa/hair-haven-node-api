import express from 'express';
import * as productController from '../controllers/products.mjs';
import * as cartController from '../controllers/carts.mjs';

const router = express.Router();

router.get('/products', productController.getProducts);
router.get('/carts', cartController.createCart);
router.get('/carts/:cartId', cartController.getCartById);

export default router;
