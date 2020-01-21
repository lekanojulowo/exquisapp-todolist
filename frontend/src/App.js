import React, {useState} from 'react';
import './App.css';

function Todo({todo, index, completeTodo, updateTodo, deleteTodo}){
return <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">{todo.task}  
  <div className="todo-action">
    <button onClick={() => completeTodo(index)}>Complete</button>
    <button onClick={() => updateTodo(index)}>Edit</button>
    <button onClick={() => deleteTodo(index)}>Delete</button>
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
function EditTodoForm({addTodo}){
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
const [todos, setTodos] = useState([
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
])

const addTodo = task => {
  const NewTodos = [...todos, {task}];
  setTodos(NewTodos);
};
  
const completeTodo = index => {
  const NewTodos = [...todos];
  NewTodos[index].isCompleted = true;
  setTodos(NewTodos);
};

const updateTodo = (index, task) => {
  const NewTodos = [...todos];
  NewTodos[index].task = task;
  setTodos(NewTodos);
};
const deleteTodo = index => {
  const NewTodos = [...todos];
  NewTodos.splice(index, 1);
  setTodos(NewTodos);
};



  return (
    <div className="App">
       
        <h1 className="todo-title">
          Exquis Todo App 
        </h1>
        <div className="todo-list">
           {todos.map((todo, index) => <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)}
        </div> 
        <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
