import models from '../models/index.js';
import { v4 as uuidv4 } from 'uuid';


export async function createCart(request, response){
    const uuid = uuidv4();

   await models.Cart.create({id:uuid})
   response.send( {
    "id": uuid,
    "items": [],
    "total_price": 0
})

    console.log('ran!!!!!')

}