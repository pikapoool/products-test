const productService = require('../service/product-service');

class ProductController {
    async create(req, res, next) {
        try {
            const product = req.body;
            const productData = await productService.create(product);
            return res.json(productData);
        } catch (e) {
            next(e);
        }
    }

    async getProducts(req, res, next) {
        try {
            const products = await productService.getAllProducts();
            return res.json(products);
        } catch (e) {
            next(e);
        }
    }

    async getProductById(req, res, next) {
        const id = req.params.id;
        try {
            const product = await productService.getProductById(id);
            return res.json(product);
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new ProductController();
