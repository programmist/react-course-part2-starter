import { Link } from "react-router-dom";
import useUsers, { User } from "./hooks/useUsers";
import { useEffect, useState } from "react";

const UserListPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { getAll } = useUsers();

  useEffect(() => {
    getAll().then((users) => setUsers(users));
  }, []);

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
