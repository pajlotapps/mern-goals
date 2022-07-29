import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { GiTargetShot } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <GiTargetShot className="logo-icon"/>
        <Link to="/">Redux goals app</Link>
      </div>

      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
