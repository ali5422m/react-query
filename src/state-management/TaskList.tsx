import {useContext} from "react";
import TasksContext from "./context/taskContext.ts";

const TaskList = () => {
    const {tasks, dispatch} = useContext(TasksContext);

    return (
        <div>
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

export default TaskList;