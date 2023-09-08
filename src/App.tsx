import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <TodoForm onAddTodo={() => {}} />
      <TodoList />;
    </>
  );
}

export default App;
