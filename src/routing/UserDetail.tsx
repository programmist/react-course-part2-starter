import { useState } from "react";
import { useParams } from "react-router-dom";
import useRouteChange from "./hooks/useRouteChange";
import useUsers, { User } from "./hooks/useUsers";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>();
  const { get } = useUsers();

  useRouteChange(() => {
    get(id as string).then((user) => setUser(user));
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
        </tr>
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

export default UserDetail;
