import NavBar from "./state-management/NavBar.tsx";
import TaskList from "./state-management/tasks/TaskList.tsx";
import AuthProvider from "./state-management/auth/AuthProvider.tsx";
import {TasksProvider} from "./state-management/tasks";

function App() {


    return (
        <>
            <AuthProvider>
                <TasksProvider>
                    <NavBar/>
                    <TaskList/>
                </TasksProvider>
            </AuthProvider>
        </>
    )
}

export default App
