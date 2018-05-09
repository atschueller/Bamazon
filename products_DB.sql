DROP DATABASE IF EXISTS products_DB;

CREATE DATABASE products_DB;

USE products_DB;


CREATE TABLE products (

  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (product_id)
);
INSERT INTO products (product_id, product_name, department_name, price, stock_quantity)
VALUES (10, 'Shampoo', 'Haircare', 10.00, 30), (11, 'Conditioner', 'Haircare', 12.00, 30), (12,'Foundation', 'Makeup', 20.00, 25),
(13, 'Bronzer', 'Makeup', 15.00, 15), (14, 'Eyeliner', 'Makeup', 10.00, 35), (15, 'Facewash', 'Skincare', 5.00, 20), (16, 'Moisterizer', 'Skincare', 20.00, 15), (17, 'Toner', 'Skincare', 15.00, 25), (18, 'Bodywash', 'Bodycare', 10.00, 25), (19, 'Self-Tanner', 'Bodycare', 25.00, 30), (20, 'Nail-File', 'Nailcare', 5.00, 30), (21, 'Nail-Polish', 'Nailcare', 10.00, 35)



