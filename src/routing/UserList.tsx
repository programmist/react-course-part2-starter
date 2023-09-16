import { Link, useParams } from "react-router-dom";
import useUsers, { User } from "./hooks/useUsers";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { getAll } = useUsers();
  const { id } = useParams();

  useEffect(() => {
    getAll().then((users) => setUsers(users));
  }, []);

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          className={`user-link list-group-item ${
            user?.id === parseInt(id as string) && "selected"
          }`}
          key={user.id}
        >
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
