import models from '../models/index.js';
import { v4 as uuidv4 } from 'uuid';

export async function createCart(request, response) {
  try {
    const cart = await models.Cart.create();

    response.json({
      id: cart.id,
      items: [],
      total_price: 0,
    });
  } catch (error) {
    console.error('Error creating cart:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getCartById(request, response) {
  try {
    const { cartId } = request.params;
    const cart = await models.Cart.findByPk(cartId, {
      include: [
        {
          model: models.CartItem,
          as: 'cartItems',
          include: models.Product,
        },
      ],
    });
    if (!cart) {
      return response.status(404).json({ error: 'Cart not found' });
    }
    const formattedCart = {
      id: cart.id,
      items: cart.cartItems.map((cartItem) => ({
        id: cartItem.id,
        product: {
          title: cartItem.Product.title,
          unit_price: cartItem.Product.unit_price,
          id: cartItem.Product.id,
          image: cartItem.Product.image,
        },
        quantity: cartItem.quantity,
        total_price: cartItem.quantity * cartItem.Product.unit_price,
      })),
      total_price: cart.cartItems.reduce(
        (total, cartItem) =>
          total + cartItem.quantity * cartItem.Product.unit_price,
        0
      ),
    };

    response.json(formattedCart);
  } catch (error) {
    console.error('Error finding cart:', error);
    response.status(500).json({ error: error });
  }
}

export async function getCartItems(req, res) {
  console.log('running instance');

  try {
    // Extract cart ID from the URL parameters
    const { cartId } = req.params;

    // Find the cart by its ID
    const cart = await models.Cart.findByPk(cartId, {
      include: [
        { model: models.CartItem, as: 'cartItems', include: models.Product },
      ],
    });

    // If cart not found, return 404 error
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    // Extract and format product information from the cart items
    const cartItems = cart.cartItems.map((cartItem) => ({
      id: cartItem.id,
      product: {
        id: cartItem.Product.id,
        title: cartItem.Product.title,
        unit_price: parseFloat(cartItem.Product.unit_price),
        image: cartItem.Product.image,
      },
      quantity: cartItem.quantity,
      total_price:
        parseFloat(cartItem.quantity) * parseFloat(cartItem.Product.unit_price),
    }));

    // Send the formatted product information in the response
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching products in cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getCartItemInstance(req, res) {
  try {
    const { cartId, itemId } = req.params;
    console.log(cartId, itemId);
    // Find the cart item by its ID and include the associated product
    const cartItem = await models.CartItem.findByPk(itemId, {
      include: models.Product,
    });

    if (!cartItem || cartItem.cartId !== cartId) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Send the cart item information in the response
    res.json(cartItem);
  } catch (error) {
    console.error('Error fetching cart item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
export async function getCarts(request, response) {
  const carts = await models.Cart.findAll();
  if (carts.length < 1) {
    response.status(404).json({ message: 'They are no carts' });
  } else {
    return response.send(carts);
  }
}
export async function patchCartItem(request,response){
  try {
    const cartItem = await models.CartItem.findByPk(request.params.itemId);
    response.status(200).json(cartItem);
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Internal server error' });
  }
}
