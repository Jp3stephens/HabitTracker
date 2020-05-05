import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarHeatmap from 'react-calendar-heatmap'; 
import 'react-calendar-heatmap/dist/styles.css'; 


function Todo({todo, index, completeTodo}) {
  return (
    <div className = "todo"
    style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      {todo.text}
      <div>
        <button onClick={()=> completeTodo(index)}>Complete</button>
      </div>
    </div>
  ); 
}

function TodoForm({addTodo}) {
  const [value, setValue] = React.useState(""); 
  const handleSubmit = e => {
    e.preventDefault(); 
    if(!value)return; 
    addTodo(value); 
    setValue(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
function App() {
  const [todos, setTodos] = React.useState([
    {count: 0},
    {text: "Learn about React", 
    isCompleted: false}, 
    {text: "Meet friend for lunch",
    isCompleted: false}, 
    {text: "Build a really cool todo app",
    isCompleted: false},
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}]; 
    console.log(newTodos)
    setTodos(newTodos); 
  };

  const completeTodo = index => {
    const newTodos = [...todos]; 
    if (newTodos[index+1].isCompleted == true){
      return 
    }
    newTodos[index+1].isCompleted = true;
    setTodos(newTodos); 
    console.log(newTodos[0].count += 1)
    
    console.log("This is the new todo's count"); 
    console.log(newTodos[0].count)
    if (newTodos[0].count === newTodos.length-1){
      console.log("YOU ARE DONE FOR DA DAY MY G")
      // Add a mark to the calendar for today
      // Fam

    }
    
  };


  const holaYo = (value) => {
    if (!value){ 
      alert("YOU DIDN'T DO SHIT THAT DAY FAM")
    }
    else {
      alert("YOU DID SOME SHIT THAT DAY FAM")

    }
    
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.slice(1).map((todo, index)=> (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo = {completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
      <div>

          <CalendarHeatmap
          startDate={new Date('2016-01-01')}
          endDate={new Date('2016-04-01')}
          values={[
            { date: '2016-01-01', count: 12 },
            { date: '2016-01-05', count: 3}, 
            { date: '2016-01-22', count: 0 },
            { date: '2016-01-30', count: 38 },
            // ...and so on
          ]}
          onClick = {(value)=> holaYo(value)}
        />
      </div>
    </div>
  );
}

export default App;
