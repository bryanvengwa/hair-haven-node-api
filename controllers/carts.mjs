import models from '../models/index.js';
import { v4 as uuidv4 } from 'uuid';

export async function createCart(request, response) {
    try {
     
       const cart =  await models.Cart.create();
        
        response.json({
            id : cart.id,
            items: [],
            total_price: 0
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
                    as: 'cartItems', // Specify the alias for the association between CartItem and Cart
                    include: models.Product 
                }
            ] 
        });
        if (!cart) {
            return response.status(404).json({ error: 'Cart not found' });
        }
        const formattedCart = {
            id: cart.id,
            items: cart.cartItems.map(cartItem => ({
                id: cartItem.id,
                product: {
                    title: cartItem.Product.title,
                    unit_price: cartItem.Product.unitPrice,
                    id: cartItem.Product.id,
                    image: cartItem.Product.image
                },
                quantity: cartItem.quantity,
                total_price: cartItem.quantity * cartItem.Product.unitPrice
            })),
            total_price: cart.cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.Product.unitPrice), 0)
        };


        response.json(formattedCart);
    } catch (error) {
        console.error('Error finding cart:', error);
        response.status(500).json({ error: error });
    }
}
