import useAuth from "../hooks/useAuth.ts";
import {useContext} from "react";
import TasksContext from "./taskContext.ts";



const useTasks = () => useContext(TasksContext);
const TaskList = () => {
    const {tasks, dispatch} = useTasks();
    const {user} = useAuth();

    return (
        <div>
            <p>User: {user}</p>
            <button
                onClick={() => dispatch({type: 'ADD', task: {id: Date.now(), title: "Task" + Date.now()}})}
                className="btn btn-primary my-3"
            >
                Add Task
            </button>
            <ul className="list-group">
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className="list-group-item d-flex justify-content-between"
                    >
                        <span className="flex-grow-1">{task.title}</span>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() =>
                                dispatch({type: 'DELETE', taskId: task.id })
                        }
                            >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export {useTasks};
export default TaskList;