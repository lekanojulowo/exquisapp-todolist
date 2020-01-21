var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const todos = [
    {
      task: 'Learn about React',
      isCompleted:false
    },
    {
      task: 'Take a rest',
      isCompleted:true
    },
    {
      task: 'Build a really nice todo app with react',
      isCompleted:false
    }
  ]
  res.json({ data: todos });
});

module.exports = router;
