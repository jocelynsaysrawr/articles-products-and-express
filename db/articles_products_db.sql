DROP DATABASE IF EXISTS articles_products_db;
DROP USER IF EXISTS articles_products_user;
CREATE USER articles_products_user WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE articles_products_db OWNER articles_products_user;
\c articles_products_db;
SET ROLE articles_products_user;

CREATE SEQUENCE product_product_sku_seq START 101;
CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    product_price NUMERIC (10, 2) NOT NULL,
    product_inventory NUMERIC (10, 2) NOT NULL DEFAULT 0,
    product_sku INTEGER NOT NULL DEFAULT nextval('product_product_sku_seq')
);

CREATE TABLE article (
    article_id SERIAL PRIMARY KEY,
    article_title VARCHAR(255) NOT NULL,
    article_content TEXT NOT NULL,
    article_author VARCHAR(100) NOT NULL
);

