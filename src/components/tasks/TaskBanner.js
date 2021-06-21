import React from 'react'
import './styles.css'

export const TaskBanner = props =>{
    return <h3 className="bannerStyle bg-primary text-white text-center p.4">
       <p style={{textAlign:"left", marginLeft:"5px"}}>{props.user} Task App [
           {props.taskItems.filter(task => !task.done && task.user === props.user).length} task to done]</p>
    </h3>
}