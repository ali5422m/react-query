import NavBar from "./state-management/NavBar.tsx";
import TaskList from "./state-management/TaskList.tsx";
import AuthProvider from "./state-management/AuthProvider.tsx";
import TasksProvider from "./state-management/TasksProvider.tsx";

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
