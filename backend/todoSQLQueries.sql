CREATE DATABASE exquisapptodo;
\c exquisapptodo;

CREATE TABLE todo (
  id SERIAL PRIMARY KEY,
  todo VARCHAR,
  priority VARCHAR,
  status VARCHAR,  
  createdOn VARCHAR DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO todo (todo, priority, status)
  VALUES ('Study Javascript', 'High', 'In Progress'),
          ('Go GYM', 'Medium', 'In Progress'),
         