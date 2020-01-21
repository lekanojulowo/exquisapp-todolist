var express = require('express');
var router = express.Router();
var todo  = require('../todo.js');


router.get('/', todo.getAllTodos);
router.get('/:id', todo.getSingleTodo);
router.post('/', todo.createTodo);
router.patch('/:id', todo.updateTodo);
router.delete('/:id', todo.deleteTodo);

module.exports = router;
