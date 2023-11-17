DROP TABLE IF EXISTS Customers CASCADE;

CREATE TABLE Customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    phone_number VARCHAR
);

DROP TABLE IF EXISTS Restaurants CASCADE;

CREATE TABLE Restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    location VARCHAR,
    cuisine_type VARCHAR
);

DROP TABLE IF EXISTS Menu_Items CASCADE;

CREATE TABLE Menu_Items (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    price NUMERIC,
    restaurant_id INTEGER REFERENCES Restaurants(id)
);


DROP TABLE IF EXISTS Orders CASCADE;

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES Customers(id),
    restaurant_id INTEGER REFERENCES Restaurants(id),
    order_date DATE,
    total_price NUMERIC
);

DROP TABLE IF EXISTS Menu_Item_Orders CASCADE;

CREATE TABLE Menu_Item_Orders (
    order_id INTEGER REFERENCES Orders(id),
    menu_item_id INTEGER REFERENCES Menu_Items(id),
    quantity INTEGER
);