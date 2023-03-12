module.exports = class ProductDto {
  id;
  thumbnail;
  title;
  description;
  color;
  price;
  rating;

  constructor(model) {
    this.id = model._id;
    this.thumbnail = model.thumbnail;
    this.title = model.title;
    this.description = model.description;
    this.color = model.color;
    this.price = model.price;
    this.rating = model.rating;
  }
};
