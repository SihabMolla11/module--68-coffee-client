import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-4 bg-gray-300 p-4 rounded-b-md">
      <ul className="flex gap-4 font-medium">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/addcoffee">Add Coffee</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
