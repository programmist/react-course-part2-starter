import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useUsers, { User } from "./hooks/useUsers";

const UserDetailPage = () => {
  // URL params
  const { id } = useParams();
  const nav = useNavigate();

  // Query string params
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [user, setUser] = useState<User | undefined>();
  const { get } = useUsers();

  useEffect(() => {
    get(id as string).then((user) => setUser(user));
    console.log("useLocation", location);
    console.log(searchParams.toString());
    console.log(searchParams.get("state"));
  }, []);

  return (
    <>
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          nav("/");
        }}
      >
        <button className="btn btn-primary">Home</button>
      </form>
    </>
  );
};

export default UserDetailPage;
