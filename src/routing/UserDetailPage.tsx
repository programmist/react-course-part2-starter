import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUsers, { User } from "./hooks/useUsers";

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>();
  const { get } = useUsers();

  useEffect(() => {
    get(id as string).then((user) => setUser(user));
  }, []);

  return (
    <table className="table">
      <thead>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
      </thead>
      <tbody>
        <tr>
          <td>{user?.id}</td>
          <td>{user?.name}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDetailPage;
