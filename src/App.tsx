import TodoForm from "./react-query/TodoForm.tsx";
import TodoList from "./react-query/TodoList.tsx";
import TaskList from "./state-management/TaskList.tsx";

function App() {

    return (
        <>
            <TaskList />
            <TodoForm/>
            <TodoList/>
        </>
    )
}

export default App
