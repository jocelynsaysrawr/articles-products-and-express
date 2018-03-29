class ProductList {
  constructor() {
    this._storage = [];
    this._id = 1;
  }

  getAllProducts() {
    return this._storage;
  }

  getId() {
    return this._id;
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
  }

  updateProduct(id, name, price, inventory) {
    let productToUpdate = this._storage.filter(obj => {
      return obj.id === id;
    });
    const index = this._storage
      .map(obj => {
        return obj.id;
      })
      .indexOf(id);
    console.log("index: ", index);
    console.log("productToUpdate: ", productToUpdate[0]);
    productToUpdate[0].name = name;
    productToUpdate[0].price = price;
    productToUpdate[0].inventory = inventory;
    console.log("productToUpdateAfter: ", productToUpdate[0]);
    this._storage.splice(index, 1, productToUpdate[0]);
  }
}

module.exports = {
  ProductList
};
