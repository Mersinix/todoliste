import React from 'react';

const Todo = ({element,handelDelete,handleComplete,handleEdit,handleSave}) => {

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


return{
    <>
    {element.editable ?(
        <div>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <button>Save</button>
        <button>cancel</button>
        </div>
    ):(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {" "}
            <p style={{textDecoration:element.isCompleted&& "line_through"}}></p>
            <button onClick={delet}>delete</button>
            <button onClick={editt}>edit</button>
            <button onClick={completet}>{element.isCompleted? "not complete"} </button>

        </div>
    )}
    </>
}