// Configuration files

const db = require("./config");
const table= 'todos';

// Get fetch all todos
const getAllTodos = (req, res, next) => {
  db.any(`select * from ${table} order by id asc`)
    .then((data) => {
      res.status(200)
        .json({
            status: 'success',
            data
          });
      })
      .catch((err) => {
        return next(err);
      });
  }

// Get  fetch single Todo
  const getSingleTodo = (req, res, next) => {
    var todoId = parseInt(req.params.id);
    db.one(`select * from ${table} where id = $1`, todoId)
      .then((data) => {        
        res.status(200)
          .json({
            status: 'success',
            data
          });
      })
      .catch((err) => {
        return next(err);
      });
  }

  // POST: Create todo
const createTodo = (req, res, next) => {    
    const {task} = req.body;
    const values = [task];
    db.one(`insert into ${table}(task) values($1) returning id`, [...values])  
      .then((data) => {
                    
          res.status(200)
          .json({
            status: 'success',
            data: {
              message: 'Todo successfully created'
            }
          });
    })
          .catch((err) => {
        return next(err);    
})
}
  
  // PUT OR PATCH Edit Todo
  const updateTodo = (req, res, next) => {
    db.none(`update ${table} set completed=$1 where id=$2`,
    [req.body.completed, parseInt(req.params.id)])
      .then(() => {
        res.status(200)
        .json({
          status: 'success',
          data: {
            message: 'Todo successfully updated'
          }
        });
      })
      .catch((err) => {
        return next(err);
      });
    }
  
  
    
    // DELETE delete Todo
    const deleteTodo = (req, res, next) => {      
      db.none(`delete from ${table} where id = $1`, [parseInt(req.params.id)])
      .then(() => {
        res.status(200)
        .json({
          status: 'success',
          data: {
            message: `Todo successfully deleted`
          }
        });
      })
      .catch((err) => {
        return next(err);
      });
  }  
    
module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo 
};

