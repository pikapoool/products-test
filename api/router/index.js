const Router = require('express').Router;
const productController = require('../controllers/product-controller');
const router = new Router();

router.post('/products', productController.create);
router.get('/products', productController.getProducts);
router.get('/product/:id', productController.getProductById);

module.exports = router;
