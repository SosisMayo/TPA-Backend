CREATE TABLE products(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL UNIQUE,
stock INT(4),
product_type ENUM('resistor','capacitor','inductor','switch','led') NOT NULL,
price INT
);