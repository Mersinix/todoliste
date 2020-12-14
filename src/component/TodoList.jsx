 import React from 'react';
 import Todo from './Todo';

const TodoList = ({todos,handelDelete,handleComplete,handleEdit,handleSave}) => {
    

    return (
        <div>
            <h1>This is todolist</h1>
            {todos.map((el)=>(
                <Todo key={el.id} element={el}
                todos={todos}
                handelDelete={handelDelete}
                handleComplete={handleComplete}
                handleEdit={handleEdit}
                handleSave={handleSave}/>
            ))}
        </div>
    )
}

export default TodoList;
