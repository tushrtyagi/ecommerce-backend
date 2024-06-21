const express = require('express');
const { createOrder, getOrder, getOrders } = require('../controllers/orderController');
const router = express.Router();

router.post('/', createOrder);
router.get('/:id', getOrder);
router.get('/', getOrders);

module.exports = router;
