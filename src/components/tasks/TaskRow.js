import React from "react";

export const TaskRow = (props) => (

    <tr style={{background:props.task.done ? "#88fa9d" : ""}}>
        <td className="tdStyle">{props.task.name}</td>
        <td className="tdStyle">
            <input type="checkbox"
            checked={props.task.done}
            onChange={()=>props.toggleTask(props.task)}/>
        </td>
    </tr>
);
