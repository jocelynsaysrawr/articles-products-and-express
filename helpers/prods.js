class ProductList {
  constructor() {
    this._storage = [];
    this._id = 1;
  }

  getAllProducts() {
    return this._storage;
  }

  addProduct(name, price, inventory) {
    this._storage.push({ name, price, inventory });
    // return this.getAllProducts();
  }
}

module.exports = {
  ProductList
};
