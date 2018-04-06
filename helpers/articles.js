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

  updateArticle(title, content, author) {
    const articleToUpdate = this._storage.filter(obj => obj.title === title);
    const index = this._storage.map(obj => obj.title);
    articleToUpdate[0].title = title;
    articleToUpdate[0].content = content;
    articleToUpdate[0].author = author;
    this._storage.splice(index, 1, articleToUpdate[0]);
  }

  deleteArticle(title) {
    const index = this._storage.map(obj => obj.title).indexOf(title);
    this._storage.splice(index, 1);
  }
}

module.exports = {
  ArticleList
};
