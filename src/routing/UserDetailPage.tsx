import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useUsers, { User } from "./hooks/useUsers";

const UserDetailPage = () => {
  // URL params
  const { id } = useParams();

  // Query string params
  const [searchParams, setSearchParams] = useSearchParams();

  const [user, setUser] = useState<User | undefined>();
  const { get } = useUsers();

  console.log(searchParams.toString());
  console.log(searchParams.get("state"));

  useEffect(() => {
    get(id as string).then((user) => setUser(user));
  }, []);

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

export default UserDetailPage;
