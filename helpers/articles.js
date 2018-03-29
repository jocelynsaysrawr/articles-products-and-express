class ArticleList {
  constructor() {
    this._storage = [];
    this._id = 1;
  }

  getAllArticles() {
    return this._storage;
  }

  getId() {
    return this._id;
  }

  addArticle(title, content, author) {
    this._storage.push({
      id: this._id,
      title,
      content,
      author
    });
    this._id++;
  }
}

module.exports = {
  ArticleList
};
