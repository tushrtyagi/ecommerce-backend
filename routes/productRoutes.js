const express = require('express');
const { addProduct, getProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/', addProduct);
router.get('/:id', getProduct);

module.exports = router;
