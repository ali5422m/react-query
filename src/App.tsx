import TodoForm from "./react-query/TodoForm.tsx";
import TodoList from "./react-query/TodoList.tsx";
import Counter from "./state-management/Counter.tsx";

function App() {

    return (
        <>
            <Counter />
            <TodoForm/>
            <TodoList/>
        </>
    )
}

export default App
