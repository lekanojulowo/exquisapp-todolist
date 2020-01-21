CREATE DATABASE exquisapptodo;
\c exquisapptodo;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task VARCHAR,
  completed BOOLEAN DEFAULT false
);

INSERT INTO todos (task, completed)
  VALUES ('Learn react', 'False'),
          ('Take a rest', 'true'),
          ('Build a nice todo app with react', 'false');
         