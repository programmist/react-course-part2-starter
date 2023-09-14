import { createContext, Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const tasksContext = createContext<TasksContextType>({} as TasksContextType);

export default tasksContext;
