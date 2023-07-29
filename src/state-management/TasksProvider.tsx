import {ReactNode, useReducer} from "react";
import tasksReducer from "./reducers/tasksReducer.ts";
import TasksContext from "./context/taskContext.ts";

interface Props {
    children: ReactNode;
}
const TasksProvider = ({children}: Props) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksProvider;