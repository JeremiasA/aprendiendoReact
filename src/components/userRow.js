import React from "react";




export const UserRow = ({user, changeUser, taskItems}) => (
    <tr>
        <td>
            <button className="btn btn-secondary" onClick={()=> changeUser(user)} >{user}</button>
            
        </td>
        <td>{taskItems.filter(task => !task.done && task.user === user).length} Pending Task/s</td>
    </tr>
);
