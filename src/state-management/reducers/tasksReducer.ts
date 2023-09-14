export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
  /*
   * Note: A default case here is not required for similar
   * reasons that it's not required in counterReducer. This
   * case is a bit more complex, but the reasoning is the same:
   * tsc ensures that action.type has one of the expected values.
   */
};

export default tasksReducer;
