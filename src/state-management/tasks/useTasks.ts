import { useContext } from "react";
import tasksContext from "./tasksContext";

const useTasks = () => {
  return useContext(tasksContext);
};

export default useTasks;
