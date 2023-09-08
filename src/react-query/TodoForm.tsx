import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";
import axios from "axios";
interface Props {
  onAddTodo: (todo: string | undefined) => void;
}

const TodoForm = ({ onAddTodo }: Props) => {
  const queryClient = useQueryClient();
  const { error, mutate, isLoading } = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // APPROACH 1: Invalidate cache so newly added data is fetched
      // and displayed. Note: This won't work on JSONPlaceholder fake API
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"],
      // });

      // APPROACH 2: Updating the data in the cache directly
      // Add the new Todo directly to the top of the cached list of Todos
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
      if (ref.current) ref.current.value = "";
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {error && <div className="alert alert-danger">{error.message}</div>}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref?.current?.value) {
            mutate({
              id: 0,
              title: ref?.current?.value,
              completed: false,
              userId: 1, // hardcoded for testing
            });
          }
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button disabled={isLoading} className="btn btn-primary">
            {isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
