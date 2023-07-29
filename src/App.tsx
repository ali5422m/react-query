import NavBar from "./state-management/NavBar.tsx";
import TaskList from "./state-management/tasks/TaskList.tsx";
import AuthProvider from "./state-management/auth/AuthProvider.tsx";
import {TasksProvider} from "./state-management/tasks";
import Counter from "./state-management/counter/Counter.tsx";

function App() {


    return (
        <>
            <AuthProvider>
                <TasksProvider>
                    <Counter />
                    <NavBar/>
                    <TaskList/>
                </TasksProvider>
            </AuthProvider>
        </>
    )
}

export default App
