CREATE DATABASE exquisapptodo;
\c exquisapptodo;

CREATE TABLE todo (
  id SERIAL PRIMARY KEY,
  task VARCHAR,
  completed BOOLEAN
);

INSERT INTO todo (task, completed)
  VALUES ('Learn', 'False'),
          ('Take a rest', 'true'),
          ('Build a nice todo app with react', 'false');
         