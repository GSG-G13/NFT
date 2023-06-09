BEGIN;
DROP TABLE IF EXISTS users, products, cart CASCADE;

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    image TEXT,
    budget NUMERIC(10,2),
    role VARCHAR(10) NOT NULL DEFAULT 'user'
);
CREATE TABLE products(
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL UNIQUE,
    image TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL
);


CREATE TABLE cart(
    id BIGSERIAL PRIMARY KEY,
    userId INT NOT NULL,
    productId INT NOT NULL,
    likes VARCHAR(10) DEFAULT 'false',
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;