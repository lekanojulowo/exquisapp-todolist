import React, {useState} from 'react';
import './App.css';

function Todo({todo, index}){
return <div className="todo">{todo.task}</div>;
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="type new todo here"  value={value} onChange={e => setValue(e.target.value)} />
      <input type="submit" value="Add Task" />
    </form>
  )
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
    task: 'Build really nice todo app with react',
    isCompleted:false
  }
])

const addTodo = task => {
  const NewTodos = {...todos, task};
  setTodos(NewTodos);
}

  return (
    <div className="App">
       
        <h1 className="todo-title">
          Exquis Todo App 
        </h1>
        <div className="todo-list">
           {todos.map((todo, index) => <Todo key={index} index={index} todo={todo} />)}
        </div> 
        <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
