import { useState } from "react";
import { TaskRow } from "./components/tasks/TaskRow";
import { Menu } from "./components/menu/Menu";
import { Footer } from "./components/footer/Footer";
import { TaskCreator } from "./components/tasks/TaskCreator";
import { UserRow } from "./components/users/userRow";
import { deleteConfirm, deletedAlert, inValidTaskName } from "./alerts/alerts";  
import "./App.css";
import SignIn from "./components/singIn/SinginForm";
import { fakeUsers, fakeTasks } from "./exampleData/example_data";

function App() {
    const [users, setUsers] = useState(fakeUsers);
    const [taskItems, setTaskItems] = useState(fakeTasks);
    const [activeUser, setActiveUser] = useState(users.find(u => u.logged));
    const [loggedUser, setLoggedUser] = useState(users.find(u => u.logged));

    const toggleTask = task => {
        setTaskItems(
            taskItems.map(t =>
                t.name === task.name ? { ...t, done: !t.done } : t
            )
        );
    };

    const changeUser = user => {
        setUsers(
            users.map(u => {
                if (u.username === user) {
                    setActiveUser(u);
                    return { ...u, active: true };
                } else {
                    return { ...u, active: false };
                }
            })
        );
    };

    const taskTableRows = () => {
        return taskItems.map(task => {
            if (task.user === activeUser.username)
                return (
                    <TaskRow
                        key={task.id}
                        task={task}
                        activeUser={activeUser.username}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                );
        });
    };

    const userTableRows = () => {
        return users.map(user => (
            <UserRow
                key={user.username}
                user={user.username}
                changeUser={changeUser}
                taskItems={taskItems}
            />
        ));
    };

    const addNewTask = (taskName, userName, taskId) => {
        if (!taskItems.find(t => t.name === taskName && t.user === userName)) {
            setTaskItems([
                ...taskItems,
                { name: taskName, user: userName, id: taskId, done: false },
            ]);
        } else {
            inValidTaskName("Una tarea con el mismo nombre ya existe!"); //crear alerts personalizados
        }
    };

    const deleteTask = async deletedTaskId => {
        if (activeUser.deletionConfirm === false) {
            const newTaskItems = taskItems.filter(
                task => task.id !== deletedTaskId
            );
            setTaskItems(newTaskItems);
            deletedAlert();
        } else {
            const { result, deleteConfirmOption } = await deleteConfirm();
            if (result.isConfirmed) {
                const newTaskItems = taskItems.filter(
                    task => task.id !== deletedTaskId
                );
                setTaskItems(newTaskItems);
                deletedAlert();
            }
            if (deleteConfirmOption) {
                setUsers(
                    users.map(u => {
                        if (u.username === activeUser.username) {
                            setActiveUser({ ...u, deletionConfirm: false });
                            return { ...u, deletionConfirm: false };
                        } else {
                            return u;
                        }
                    })
                );

                console.log(users, activeUser);
            }
        }
    };

    const loginControl =  ({ pass, usrname }) => {
        //axios.post
        const foundedUser =  users.find(user => user.username===usrname)
        if(foundedUser.password === pass){
            setLoggedUser(foundedUser)
            setActiveUser(foundedUser) 
        }
    };

    const logout = () => {
        setLoggedUser("");
    };

    //RENDER
    if (!loggedUser) {
        return <SignIn cb={loginControl} />;
    } else {
        if (loggedUser.role === "admin") {
            return (
                <div>
                    <Menu
                        loggedUser={loggedUser}
                        cblogout={logout}
                    />
                    {loggedUser ? (
                        <TaskCreator
                            cb={addNewTask}
                            users={users}
                            tasksLength={taskItems.length}
                        />
                    ) : (
                        ""
                    )}

                    <div className="divTablesStyle">
                        <table className="tableStyle table table-striped table-bordered">
                            <thead className="thStyle">
                                <tr>
                                    <th className="thStyle text-center">
                                        Description
                                    </th>
                                    <th
                                        style={{ width: "10px" }}
                                        className="thStyle text-center"
                                    >
                                        Done
                                    </th>
                                    <th
                                        style={{ width: "10px" }}
                                        className="thStyle text-center"
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            {loggedUser ? <tbody>{taskTableRows()}</tbody> : ""}
                        </table>
                        <table style={{ marginLeft: "20px" }}>
                            <tr>
                                <td className="bg-primary" width="2"></td>
                            </tr>
                        </table>

                        <table className="usersTableStyle table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Tasks</th>
                                </tr>
                            </thead>
                            <tbody>{userTableRows()}</tbody>
                        </table>
                    </div>
                    <Footer user={loggedUser.username} taskItems={taskItems} />
                </div>
            );
        } 
            return (
                <div>
                    <Menu loggedUser={loggedUser}
                        cblogout={logout}/>
                    <hr />
                    <div className="divTablesStyle">
                        <table className="tableStyle table table-striped table-bordered">
                            <thead className="thStyle">
                                <tr>
                                    <th className="thStyle text-center">
                                        Description
                                    </th>
                                    <th
                                        style={{ width: "10px" }}
                                        className="thStyle text-center"
                                    >
                                        Done
                                    </th>
                                    <th
                                        style={{ width: "10px" }}
                                        className="thStyle text-center"
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            {loggedUser ? <tbody>{taskTableRows()}</tbody> : ""}
                        </table>
                        <table style={{ marginLeft: "20px" }}>
                            <tr>
                                <td className="bg-primary" width="2"></td>
                            </tr>
                        </table>
                    </div>
                    <Footer
                        user={loggedUser ? loggedUser.username : ""}
                        taskItems={taskItems}
                    />
                </div>
            );
        }
    }

export default App;
