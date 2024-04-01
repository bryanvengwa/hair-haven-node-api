import models from '../models/index.js'; 

export async function getProducts(request, response) {
    console.log('function ran')
    // response.send('products');
    const products = await models.Product.findAll();
    console.log(products)
    if (products.length > 0){
      return  response.send('no products')

    }
    response.send('jgjg')
}