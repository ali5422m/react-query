import {Task, TaskAction} from "./TasksProvider.tsx";
import React, {Dispatch} from "react";

interface TaskContextType {
    tasks: Task[];
    dispatch: Dispatch<TaskAction>
}

const TasksContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TasksContext;