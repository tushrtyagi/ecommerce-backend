
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
      },
      description: {
        type: String,
        required: [true, 'Please add a description']
      },
      price: {
        type: Number,
        required: [true, 'Please add a price']
      },
      stock: {
        type: Number,
        required: [true, 'Please add stock quantity']
      },
      category: {
        type: String,
        required: [true, 'Please add a category']
      }
});

module.exports = mongoose.model('Product', productSchema);
