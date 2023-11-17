\copy Customers FROM './data/customers.csv' DELIMITER ',' CSV HEADER;

\copy Restaurants FROM './data/restaurants.csv' DELIMITER ',' CSV HEADER;

\copy Menu_Items FROM './data/menuitems.csv' DELIMITER ',' CSV HEADER;

\copy Orders FROM './data/orders.csv' DELIMITER ',' CSV HEADER;

\copy Menu_Item_Orders FROM './data/menuitemorders.csv' DELIMITER ',' CSV HEADER;


INSERT INTO Customers VALUES 
(4,'Alice','Johnson','alicejohnson@email.com',555-1111),
(5,'Michael','Smith','michaelsmith@email.com',555-2222),
(6,'Emily','Brown','emilybrown@email.com',555-3333);

INSERT INTO restaurants  VALUES
  (4,'Taco Palace', '321 Oak St', 'Mexican'),
  (5,'Sushi Master', '654 Elm St', 'Japanese'),
  (6,'Pasta Paradise', '987 Maple St', 'Italian');

INSERT INTO menu_items VALUES
  (4,'Chicken Quesadilla', 8.99, 4),
  (5,'Tempura Roll', 14.99, 5),
  (6,'Spaghetti Bolognese', 12.99, 6);

INSERT INTO orders  VALUES
  (7,4, 4, '2023-11-19', 18.99),
  (8,5, 5, '2023-11-20', 28.99),
  (6,6, 6, '2023-11-21', 22.99);

INSERT INTO menu_item_orders  VALUES
  (4, 4, 2),
  (4, 6, 1),
  (5, 5, 1),
  (5, 6, 2),
  (6, 4, 3),
  (6, 5, 1);