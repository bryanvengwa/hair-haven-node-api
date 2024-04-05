import models from '../models/index.js';

export async function getProducts(request, response) {
  console.log('function ran');
  // response.send('products');
  const products = await models.Product.findAll();
  // console.log(products);
  // if (products.length < 0) {
  //   return response.send('no products');
  // }
  response.send(products);
}

export async function getProductsById(request, response) {}

export async function createProduct(request, response) {
  const { title, description, product_type, inventory, slug, unit_price } =
    request.body;
  console.log('REQUEST BODY : ', title, description, product_type, inventory, slug, unit_price)
  if (request.file) {
    // If request.file exists, it means a file was uploaded
    // You can access the uploaded file details through request.file
    const filename = request.file.filename;
    // Now you can use the filename to store it in the database or perform other actions
    // For example:
    const product = await models.Product.create({
      title,
      description,
      product_type,
      inventory,
      slug,
      unit_price,
      image: filename,
    });
    response.status(201).json({ message: 'Successfully uploaded', filename });
  } else {
    // If no file was uploaded, you can handle it accordingly
    response.status(400).json({ message: 'No file uploaded' });
  }
}
