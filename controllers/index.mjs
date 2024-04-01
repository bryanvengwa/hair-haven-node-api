// import express from 'express';
// const router = express.Router();
// const { Product, Collection, Review, Cart, CartItem } = require('./models'); // Assuming you have Sequelize models defined

// const {
//   ProductSerializer,
//   CollectionSerializer,
//   ReviewSerializer,
//   CartSerializer,
//   CartItemSerializer,
//   AddCartItemSerializer,
//   UpdateCartItemSerializer,
// } = require('./serializers');

// // ProductViewSet equivalent
// router.get('/products', async (req, res) => {
//   try {
//     let query = {};
//     const collectionId = req.query.collection_id;
//     if (collectionId) {
//       query = { where: { collectionId: collectionId } };
//     }
//     const products = await Product.findAll(query);
//     const serializedProducts = await Promise.all(
//       products.map((product) => ProductSerializer.toResponse(product))
//     );
//     res.json(serializedProducts);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // CollectionViewSet equivalent
// router.get('/collections/:id', async (req, res) => {
//   try {
//     const collection = await Collection.findByPk(req.params.id);
//     const serializedCollection = await CollectionSerializer.toResponse(
//       collection
//     );
//     res.json(serializedCollection);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // ReviewSet equivalent
// router.get('/reviews', async (req, res) => {
//   try {
//     const reviews = await Review.findAll();
//     const serializedReviews = await Promise.all(
//       reviews.map((review) => ReviewSerializer.toResponse(review))
//     );
//     res.json(serializedReviews);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // CartViewSet equivalent
// router.get('/carts/:id', async (req, res) => {
//   try {
//     const cart = await Cart.findByPk(req.params.id, {
//       include: { model: CartItem },
//     });
//     const serializedCart = await CartSerializer.toResponse(cart);
//     res.json(serializedCart);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // CartItemViewSet equivalent
// router.post('/carts/:cartId/items', async (req, res) => {
//   try {
//     const cartItem = await AddCartItemSerializer.create(req.body, {
//       cartId: req.params.cartId,
//     });
//     const serializedCartItem = await CartItemSerializer.toResponse(cartItem);
//     res.json(serializedCartItem);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// router.patch('/carts/:cartId/items/:itemId', async (req, res) => {
//   try {
//     const cartItem = await CartItem.findByPk(req.params.itemId);
//     const updatedCartItem = await UpdateCartItemSerializer.update(
//       cartItem,
//       req.body
//     );
//     const serializedCartItem = await CartItemSerializer.toResponse(
//       updatedCartItem
//     );
//     res.json(serializedCartItem);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
