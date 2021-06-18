import React from 'react'

const bannerStyle= {
    width:"100%",
    height:"75px",
    textAlign:"left"
}

export const TaskBanner = props =>{
    return <h3 style={bannerStyle} className="bg-primary text-white text-center p.4">
       <p style={{textAlign:"left", marginLeft:"5px"}}>{props.user} Task App [
           {props.taskItems.filter(task => !task.done && task.user === props.user).length} task to done]</p>
    </h3>
}