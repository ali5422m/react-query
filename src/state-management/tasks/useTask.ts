import {useContext} from "react";
import TasksContext from "./taskContext.ts";

const useTasks = () => useContext(TasksContext);

export default useTasks;