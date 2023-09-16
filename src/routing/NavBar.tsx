import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav
      className="my-app navbar navbar-expand-lg"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              {/* How to change active className in NavLink */}
              {/* <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-class" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
