import React from "react";




export const TaskRow = (props) => (

    <tr style={{background:props.task.done ? "#88fa9d" : ""}}>
        <td style={{height:"50px"}}>{props.task.name}</td>
        <td style={{height:"50px"}}>
            <input type="checkbox"
            checked={props.task.done}
            onChange={()=>props.toggleTask(props.task)}/>
        </td>
    </tr>
);
