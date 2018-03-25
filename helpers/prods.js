class ProductList {
  constructor() {
    this._storage = [];
    this._id = 1;
  }

  getAllProducts() {
    return this._storage;
  }

  addProduct(name, price, inventory) {
    const currID = this._id;
    this._storage.push({
      id: this._id,
      name,
      price,
      inventory
    });
    this._id++;
    return currID;
    // return this.getAllProducts();
  }
}

module.exports = {
  ProductList
};
