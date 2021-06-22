import { React, useState } from 'react'
import { inValidTaskName } from "../../alerts/alerts";

import './styles.css'

export const TaskCreator = (props) =>{
 const [newTaskName, setNewTaskName ] = useState('')

const changeTaskName = (e) =>{
    setNewTaskName(e.target.value)
}

const onSendNewTask = () =>{
    if(newTaskName !== ""){
        const select = document.getElementById("asignedUser");
        const selectedUser = select.options[select.selectedIndex].value;
        props.cb(newTaskName, selectedUser, props.tasksLength+1)
        setNewTaskName("")

    } else {
        inValidTaskName('Debe ingresar un nombre para la tarea!')
    }   
}

    return ( 
        <div className="creatorStyle form-group m-1">
            <h5 className="styleh5">New task:</h5>
            <input className="inputStyle form-control m-1" value={newTaskName} onChange={changeTaskName} /> 
            <select className="m-1" id="asignedUser">
                {props.users.map(usr =>
                    <option key={usr.username} value={usr.username}>{usr.username}</option>
                )}
            </select>
            <button className="btn btn-primary m-1" onClick={onSendNewTask}>Add task</button>
        </div>
    )

}