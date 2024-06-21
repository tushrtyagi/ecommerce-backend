
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      product_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      }],
      total_amount: {
        type: Number,
        required: true
      },
      status: {
        type: String,
        default: 'Pending'
      },
      order_date: {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('Order', orderSchema);
