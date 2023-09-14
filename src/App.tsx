import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";

function App() {
  return (
    <>
      <Counter />
      <TodoForm />
      <TodoList />;
    </>
  );
}

export default App;
