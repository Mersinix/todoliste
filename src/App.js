import './App.css';
import React , {useState} from 'react';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import "./style.css";

export default function App() {
  const [todos, setTodos]=useState([
    {id:0, isCompleted:false, editable:false, text:"mersini"},
    {id:1, isCompleted:false, editable:false, text:"yaakoub"}
  ])};

   const handleAdd=(x)=>{setTodos([...todos, x])};

   const handelDelete=(idTodo)=>{setTodos(todos.filter(el=> el.id!==idTodo))};

   const handleComplete=(i)=>{
     setTodos(todos.map(el=> el.id===i?{...el,isCompleted:!el.isCompleted}))
   };

   const handleEdit=(i)=>{
    setTodos(todos.map(el=> el.id===i?{...el,editable:!el.editable}))
  }

  const handleSave=(id,edited)=>{
    setTodos(todos.map(el=> el.id===id ? {...el,text:edited,editable:false} : el))
  }

  return (
    <div className="App">
      
      <AddTodo handleAdd={handleAdd}/>
      <todoList todos={todos}
      handelDelete={handelDelete}
      handleComplete={handleComplete}
      handleEdit={handleEdit}
      handleSave={handleSave}
      />
    </div>
  );
};


