import models from '../models/index.js';

export async function getProducts(request, response) {
  console.log('function ran');
  // response.send('products');
  const products = await models.Product.findAll();
  // console.log(products);
  // if (products.length < 0) {
  //   return response.send('no products');
  // }
  response.send(products)
}

export async function getProductsById(request, response) {

  


}

export async function createProduct(request, response) {
  const {title, description, product_tye, inventory, slug, unit_price , image} = request.body;
  if(request.file.filename){
    response.status(201).json({
      message:"successfully uploaded"
    })
  }

}