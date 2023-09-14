import { useContext } from "react";
import tasksContext from "../contexts/tasksContext";

const useTasks = () => {
  return useContext(tasksContext);
};

export default useTasks;
