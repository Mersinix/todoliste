import React, {useState} from 'react';

const Todo = ({element,handelDelete,handleComplete,handleEdit,handleSave,handleCancel}) => {

    const [text, setText]=useState(element.text)

    const delet=()=>{
        
        handelDelete(element.id)
    }

    const completet=()=>{
        console.log(element.id)
        handleComplete(element.id)
    }

const editt=()=>{
    console.log(element.id)
    handleEdit(element.id)
}

const save=()=>{
    handleSave(element.id,text)
}
const cancel=()=>{
    handleCancel(element.id)
    setText(element.text)
}


return(
    <>
    {element.editable ?(
        <div>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={save} >Save</button>
        <button onClick={cancel}>cancel</button>
        </div>
    ):(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {" "}
            <p style={{textDecoration:element.isCompleted&& "line_through"}}>  {element.text} </p>
            <button onClick={delet}>delete</button>
            <button onClick={editt}>edit</button>
            <button onClick={completet}>{element.isCompleted? "not complete":"Complete"}</button>

        </div>
    )}
    </>
);
}
export default Todo