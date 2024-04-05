import express from 'express';
import * as productController from '../controllers/products.mjs';
import * as cartController from '../controllers/carts.mjs';
import imageUploader from '../util/image-upload.mjs';

const router = express.Router();

router.get('/products', productController.getProducts);
router.post('/products',imageUploader.single('image'), productController.createProduct)
// this method is temporary a get method for testing purposes

router.get('/carts', cartController.createCart);
router.get('/carts/:cartId', cartController.getCartById);

router.get('/carts/:cartId/items', cartController.getCartItems);
router.get('/carts/:cartId/items/:itemId', cartController.getCartItemInstance);

export default router;
