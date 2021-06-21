import { useState } from "react";
import { TaskRow } from "./components/tasks/TaskRow";
import { TaskBanner } from './components/tasks/TaskBanner'
import { TaskCreator } from './components/tasks/TaskCreator'
import { UserRow } from './components/users/userRow'
import './App.css'


function App() {
    const [activeUser, setActiveUser] = useState("Jeremias");

    const [users, setUsers] = useState([
        {username: "Jeremias"},
        {username: "Karla"},
        {username: "Abril"}
    ]);
    const [taskItems, setTaskItems] = useState([
        { name: "task one", user: "Jeremias",  done: false, id:1 },
        { name: "task two", user:"Karla", done: false, id:2 },
        { name: "task three", user: "Jeremias",  done: true, id:3 },
        { name: "task four", user:"Abril", done: false, id:4 },
        { name: "task five", user: "Jeremias",  done: false, id:5 },
        { name: "task six", user:"Karla", done: false, id:6 },
        { name: "task seven", user: "Jeremias",  done: false, id:7 },
        { name: "task eigth", user:"Abril", done: false, id:8 },
    ]);

    const toggleTask = task =>{
      setTaskItems(taskItems.map(
          t => t.name === task.name ? {...t, done : !t.done} : t))
    }

    const changeUser = user =>{
        setActiveUser(user)
      }
  
   
    const taskTableRows = () => {
        return taskItems.map(task => {
            if(task.user === activeUser)
                return <TaskRow
                 key={task.id}
                 task={task}
                 activeUser={activeUser}
                 toggleTask={toggleTask}
                 deleteTask={deleteTask}
                 />
        }
        );
    };

    const userTableRows = () =>{
        return users.map(user =>
            <UserRow 
                key={user.username}
                user={user.username}
                changeUser={changeUser}
                
                taskItems={taskItems}
            />);
    }

    const addNewTask = (taskName, userName, taskId) => {
        if(!taskItems.find(t => t.name === taskName && t.user === userName)){ 
            setTaskItems([...taskItems, {name:taskName, user: userName, id: taskId, done:false}])
        } else {
            alert("Task already exists!") //crear alerts personalizados
        }
    }

    const deleteTask = (deletedTaskId) =>{
        const newTaskItems = taskItems.filter(task => task.id !== deletedTaskId)
        setTaskItems(newTaskItems)
    }

    return (
        <div>
            <TaskBanner user={activeUser} taskItems={taskItems} />
            <hr />
            <TaskCreator
                cb={addNewTask}
                users={users}
                tasksLength={taskItems.length}
            />
            <hr />
            <div className="divTablesStyle">
                <table className="tableStyle table table-striped table-bordered">
                    <thead className="thStyle">
                        <tr>
                            <th className="thStyle text-center">Description</th>
                            <th style={{width:"10px"}} className="thStyle text-center">Done</th>
                            <th style={{width:"10px"}} className="thStyle text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>{taskTableRows()}</tbody>
                </table>
                <table style={{marginLeft:"20px"}}>
                    <tr>
                        <td className="bg-primary" width="2"></td>
                    </tr>
                </table>
                <table
                    className="usersTableStyle table table-striped table-bordered"
                >
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>{userTableRows()}</tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
