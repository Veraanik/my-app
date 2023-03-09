import React from 'react';
type Props =
    {
        name: string;
        desk: string;
        OnDeleteClick:()=>void;
    }
const ToDoListElement =({name, desk, OnDeleteClick}: Props)=>{

    return(<div style={{display:"flex", gap:'lem'}}>
        <div>{name}</div>
        <div>{desk}</div>
        <div><button onClick={()=>OnDeleteClick()}> Delete </button></div>
    </div>)
}
export default ToDoListElement;