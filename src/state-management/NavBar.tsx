import LoginStatus from "./auth/LoginStatus.tsx";
// import useTasks from "./tasks/useTask.ts";
import useCounterStore from "./counter/store.ts";

const NavBar = () => {
    // const {tasks} = useTasks();
    const counter = useCounterStore(s => s.counter);

    console.log("render")
    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">
               {/*{tasks.length}*/}
                {counter}
            </span>
            <LoginStatus/>
        </nav>
    );
};

export default NavBar;