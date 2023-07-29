import TodoForm from "./react-query/TodoForm.tsx";
import TodoList from "./react-query/TodoList.tsx";
import TaskList from "./state-management/TaskList.tsx";
import LoginStatus from "./state-management/LoginStatus.tsx";

function App() {

    return (
        <>
            <LoginStatus />
            <TaskList />
            <TodoForm/>
            <TodoList/>
        </>
    )
}

export default App
