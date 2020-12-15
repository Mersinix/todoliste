import React, {useState} from 'react';

const AddTodo = ({element,handleAdd}) => {

    const [text, setText]=useState("")

   

    const add=()=>{
        
        handleAdd({
            id: Math.floor(Math.random() * 10000),
            text: text,
            isCompleted:false,
            editable:false,
          });
          setText('');
        };
    

return(
    
    <>
    <input
      placeholder='Add a todo'
      value={text}
      onChange={(e)=>setText(e.target.value)}
      name='text'
      className='todo-input'
      
    />
    <button onClick={add} className='todo-button'>
      Add todo
    </button>
  </>
   
);
}
export default AddTodo
