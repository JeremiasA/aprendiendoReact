import React from "react";


export const TaskRow = (props) => (

    <tr style={{background:props.task.done ? "#88fa9d" : ""}}>
        <td className="tdStyle text-center">{props.task.name}</td>
        <td className="tdStyle text-center">
            <input type="checkbox"
            checked={props.task.done}
            onChange={()=>props.toggleTask(props.task)}/>
        </td>
        <td className="tdStyle text-center">
            <button className="btn btn-danger" onClick={()=>{props.deleteTask(props.task.id)}}>X</button>
        </td>
    </tr>
);
