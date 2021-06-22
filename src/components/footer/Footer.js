import React from 'react'
import './styles.css'

export const Footer = props =>{
    return <div className="footer bg-primary text-white text-center p.4">
       <h3 style={{textAlign:"left", marginLeft:"5px", width:"40%"}}>User: {props.user}</h3>
        <h3 style={{textAlign:"left", marginLeft:"5px"}}>Tasks to done:
           {props.taskItems.filter(task => !task.done && task.user === props.user).length}</h3>   
    </div>
}