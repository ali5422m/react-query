import LoginStatus from "./LoginStatus.tsx";
import {useContext} from "react";
import TasksContext from "./context/taskContext.ts";

const NavBar = () => {
    const {tasks} = useContext(TasksContext);
    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">
               {tasks.length}
            </span>
            <LoginStatus/>
        </nav>
    );
};

export default NavBar;