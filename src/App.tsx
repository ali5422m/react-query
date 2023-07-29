import TasksContext from "./state-management/context/taskContext.ts";
import {useReducer} from "react";
import tasksReducer from "./state-management/reducers/tasksReducer.ts";
import NavBar from "./state-management/NavBar.tsx";
import TaskList from "./state-management/TaskList.tsx";
import AuthProvider from "./state-management/AuthProvider.tsx";

function App() {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <>
            <AuthProvider>
                <TasksContext.Provider value={{tasks, dispatch}}>
                    <NavBar/>
                    <TaskList/>
                </TasksContext.Provider>
            </AuthProvider>
        </>
    )
}

export default App
