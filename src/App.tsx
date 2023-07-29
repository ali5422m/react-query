import TasksContext from "./state-management/context/taskContext.ts";
import {useReducer} from "react";
import tasksReducer from "./state-management/reducers/tasksReducer.ts";
import NavBar from "./state-management/NavBar.tsx";
import TaskList from "./state-management/TaskList.tsx";

function App() {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <>
            <TasksContext.Provider value={{ tasks, dispatch}}>
               <NavBar />
                <TaskList />
            </TasksContext.Provider>
        </>
    )
}

export default App
