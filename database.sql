-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL(10,2) NOT NULL
);


INSERT INTO shopping (Name, Quantity)
VALUES
    ('Product A', 15.50),
    ('Product B', 22.75),
    ('Product C', 5.00),
    ('Product D', 100.25);

DELETE FROM shopping;

INSERT INTO shopping (name, quantity)
VALUES
    ('Product A', 15.50),
    ('Product B', 22.75),
    ('Product C', 5.00),
    ('Product D', 100.25);