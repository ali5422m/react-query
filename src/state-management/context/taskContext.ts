import {Task, TaskAction} from "../reducers/tasksReducer.ts";
import React, {Dispatch} from "react";

interface TaskContextType {
    tasks: Task[];
    dispatch: Dispatch<TaskAction>
}

const TasksContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TasksContext;