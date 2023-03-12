const ProductModel = require('../models/product-model');
const ProductDto = require('../dtos/product-dto');
const { faker } = require('@faker-js/faker');

class ProductService {
  async create(newProduct) {
    const productModel = await ProductModel.create(newProduct);
    const product = new ProductDto(productModel);
    return { product };
  }

  async createDummyData() {
    const dummyData = Array.from(Array(40).keys()).map((_) => ({
      thumbnail: {
        small: faker.image.nature(480, 320, true),
        medium: faker.image.nature(640, 480, true),
        large: faker.image.fashion(960, 640, true),
      },
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      color: faker.helpers.arrayElement([
        'Black',
        'Red',
        'White',
        'Blue',
        'Gray',
        'Brown',
      ]),
      price: faker.finance.amount(),
      rating: +(Math.random() * 5).toFixed(1),
    }));

    await ProductModel.insertMany(dummyData);
  }

  async getAllProducts(id) {
    let products = await ProductModel.find();
    if (products.length === 0) {
      await this.createDummyData();
      products = await ProductModel.find();
    }
    return products;
  }

  async getProductById(_id) {
    let products = await ProductModel.findOne({ _id });
    return products;
  }
}

module.exports = new ProductService();
