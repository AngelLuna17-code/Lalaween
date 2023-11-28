import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return <div>
    <nav>
      <ul>
        <li className="text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white">
          <Link to="/about">About</Link>
        </li>
        <li className="text-white">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Outlet />
  </div>;
}

export default Layout;