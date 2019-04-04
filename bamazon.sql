DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price decimal (10,2),
  quantity INT  (10),
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("9V Alkiline Battery 4 pack", "ConsumerElectronics",9.83, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("12V Car Battery", "Automotive", 102.75, 500);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES (" Haus Organic Avocado", "Produce", 2.25, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Huggies Small Diapers", "Babies", 13.00, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES (" Elco Windshield Wipers", "Automotive", 26.93, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Organic Carrots", "Produce", 1.60, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Celery", "Produce", 1.25, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Strawberries ", "Produce", 5.95, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Sockeye Salmon", "Seafood", 18.99, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Clams", "Seafood", 8.99, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Scallops", "Seafood", 12.95, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Whole Milk", "Dairy", 3.89, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Tillamook Cheddar Cheese", "Dairy", 5.75, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Breyers Ice cream", "Diary", 5.98, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Sweet Reisling", "Wine", 11.25, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Pinot Grigio", "Wine", 8.95 , 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Chardonnay", "Wine", 23.10, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Paul Newmann Spaghetti Sauce", "Pasta", 6.29, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Angel Hair Pasta", "Pasta", 1.89, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Ziplock Bags", "Kitchen", 3.73, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Swiffer Mop", "Kitchen", 9.73, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Sponge 3 pack", "Kitchen", 3.75, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Cascade Diswasher Soap", "Kitchen", 4.00 , 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Levi Jeans SM", "MensClothing", 33.00, 1000);

select * from products;