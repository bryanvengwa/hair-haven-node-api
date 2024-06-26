import express from 'express';
import * as productController from '../controllers/products.mjs';
import * as cartController from '../controllers/carts.mjs';
import imageUploader from '../util/image-upload.mjs';

const router = express.Router();

router.get('/products', productController.getProducts);
router.post('/products',imageUploader.single('image'), productController.createProduct)
// this method is temporary a get method for testing purposes

// getting and creating a cart
router.post('/carts', cartController.createCart);
router.get('/carts', cartController.getCarts);


// get cart by id
router.get('/carts/:cartId', cartController.getCartById);
// add cart items
router.post('/carts/:cartId/items', cartController.addCartItem);

router.get('/carts/:cartId/items/:itemId', cartController.getCartItemInstance);
router.patch('/carts/:cartId/items/:itemId', cartController.patchCartItem )


// delete cart route
router.delete('/carts/:cartId/items/:itemId')
export default router;
