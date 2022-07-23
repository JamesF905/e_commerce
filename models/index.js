// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'reader_id',
});

Category.hasMany(Product, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag
  }
});

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag
  }
});

// Products belongsTo Category ✅

// Categories have many Products ✅

// Products belongToMany Tags (through ProductTag)   ✅

// Tags belongToMany Products (through ProductTag) ✅

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
