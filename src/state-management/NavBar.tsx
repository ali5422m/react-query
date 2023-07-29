import LoginStatus from "./LoginStatus.tsx";
import useTasks from "./hooks/useTasks.ts";

const NavBar = () => {
    const {tasks} = useTasks();
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