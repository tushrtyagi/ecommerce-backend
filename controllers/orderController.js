
const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    try {
      const order = await Order.create(req.body);
      res.status(201).json({ success: true, data: order });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  };



exports.getOrder = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id).populate('user_id').populate('product_ids');
      if (!order) {
        return res.status(404).json({ success: false, error: 'Order not found' });
      }
      res.status(200).json({ success: true, data: order });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  };
  
  exports.getOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate('user_id').populate('product_ids');
      res.status(200).json({ success: true, data: orders });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  };