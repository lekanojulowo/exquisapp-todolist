import React, {useState, useEffect} from 'react';
import './App.css';

const APIURL = `http://localhost:5000`;

function Todo({todo, index, completeTodo, deleteTodo}){
return <div style={{ textDecoration: todo.completed ? 'line-through' : '' }} className="todo">{todo.task}  
  <div className="todo-action">
    <input type="checkbox" className="is-complete" checked={todo.completed} onChange={(e) => completeTodo(index,e.target.checked)} />
    <button onClick={() => deleteTodo(index)}>x</button>
  </div>
</div>;
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="new todo here"  value={value} onChange={e => setValue(e.target.value)} />
      <input type="submit" value="Add Todo" />
    </form>
  );
}


function App() {

const [todos, setTodos] = useState([]);

async function fetchTodos() {
      const res = await fetch(`${APIURL}`);
      res
        .json()
        .then(result => {
        setTodos(result.data);
         console.log(result.data)
        })
        .catch(err => console.log(err));
    }

useEffect(() => { 
  fetchTodos();
}, []);

const addTodo = async task => {
  const res = await fetch(`${APIURL}/`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({task})
          });
          res
            .json()
            .then(result => {
              if(result) fetchTodos();
            })
            .catch(err => console.log(err));
}
  
const completeTodo = async (index, completed ) => {
  const NewTodos = [...todos];
  const data = NewTodos[index];

  const res = await fetch(`${APIURL}/${data.id}`, {
            method: "PATCH",
            mode: "cors",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({completed})
          });
          res
            .json()
            .then(result => {
              if(result) fetchTodos();
            })
            .catch(err => console.log(err));;
};

const deleteTodo = async index => {
  const NewTodos = [...todos];
   const data = NewTodos[index];
   const res = await fetch(`${APIURL}/${data.id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache"
  });

  res
  .json()
  .then(result => {
  if(result) fetchTodos();
  })
  .catch(err => console.log(err));
}



  return (
    <div className="App">
       
        <h1 className="todo-title">
          Exquis Todo App 
        </h1>
        <div className="todo-list">
           {todos.map((todo, index) => <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}  deleteTodo={deleteTodo} />)}
        </div> 
        <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
