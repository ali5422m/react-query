import {useContext} from "react";
import TasksContext from "../context/taskContext.ts";

const useTasks = () => useContext(TasksContext);
export default useTasks;