// const { DataTypes } = require('sequelize');
// const { Model } = require('sequelize');

// // Assuming you have Sequelize models already defined for Product, Collection, Review, Cart, and CartItem

// class CollectionSerializer {
//   static async toResponse(collection) {
//     const productsCount = await collection.countProducts(); // Assuming you have a method to count products in the Collection model
//     return {
//       id: collection.id,
//       title: collection.title,
//       products_count: productsCount,
//     };
//   }
// }

// class ProductSerializer {
//   static async toResponse(product) {
//     const priceWithTax = product.unit_price * 1.1; // Calculate tax
//     return {
//       id: product.id,
//       title: product.title,
//       unit_price: product.unit_price,
//       product_type: product.product_type,
//       slug: product.slug,
//       inventory: product.inventory,
//       description: product.description,
//       price_with_tax: priceWithTax,
//       Collection: product.Collection, // Assuming Collection is associated with the Product model
//       image: product.image,
//     };
//   }

//   static async create(validatedData) {
//     const product = await Product.create(validatedData);
//     product.other = 1;
//     await product.save();
//     return product;
//   }

//   static async update(instance, validatedData) {
//     instance.unit_price = validatedData.unit_price;
//     await instance.save();
//     return instance;
//   }
// }

// class ReviewSerializer {
//   static async toResponse(review) {
//     return {
//       id: review.id,
//       date: review.date,
//       name: review.name,
//       description: review.description,
//       product: review.product,
//     };
//   }
// }

// class SimpleProductSerializer {
//   static async toResponse(product) {
//     return {
//       title: product.title,
//       unit_price: product.unit_price,
//       id: product.id,
//       image: product.image,
//     };
//   }
// }

// class CartItemSerializer {
//   static async toResponse(cartItem) {
//     const total_price = cartItem.quantity * cartItem.product.unit_price;
//     const product = await SimpleProductSerializer.toResponse(cartItem.product);
//     return {
//       id: cartItem.id,
//       product: product,
//       quantity: cartItem.quantity,
//       total_price: total_price,
//     };
//   }
// }

// class CartSerializer {
//   static async toResponse(cart) {
//     const items = await Promise.all(cart.items.map(item => CartItemSerializer.toResponse(item)));
//     const total_price = items.reduce((acc, item) => acc + item.total_price, 0);
//     return {
//       id: cart.id,
//       items: items,
//       total_price: total_price,
//     };
//   }

//   static async getCartItemById(cart, targetProductId) {
//     // Iterate through CartItems and find the one with the target ProductId
//     for (const item of cart.items) {
//       if (item.product.id === targetProductId) {
//         return item.id;
//       }
//     }
//     return null;
//   }
// }

// module.exports = {
//   CollectionSerializer,
//   ProductSerializer,
//   ReviewSerializer,
//   SimpleProductSerializer,
//   CartItemSerializer,
//   CartSerializer,
// };
