const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  thumbnail: {
    small: String,
    medium: String,
    large: String,
  },
  title: String,
  description: String,
  color: String,
  price: Number,
  rating: Number,
});

module.exports = model('Product', ProductSchema);
