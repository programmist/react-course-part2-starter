import { useRef } from "react";
import useAddTodo from "../hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { error, mutate, isLoading } = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

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
