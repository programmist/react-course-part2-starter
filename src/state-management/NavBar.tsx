import { LoginStatus } from "./auth";
import useCounterStore from "./counter/store";
import useTasks from "./tasks/useTasks";

const NavBar = () => {
  const { tasks } = useTasks();
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">Counter: {counter}</span>
      <span className="badge text-bg-secondary">
        Task Count: {tasks.length}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
