
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
      },
      payment_method: {
        type: String,
        required: true
      },
      payment_status: {
        type: String,
        required: true
      },
      transaction_id: {
        type: String,
        required: true
      }
});

module.exports = mongoose.model('Payment', paymentSchema);
