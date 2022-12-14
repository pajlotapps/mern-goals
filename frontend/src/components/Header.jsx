import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { GiTargetShot } from "react-icons/gi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const location = useLocation()

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <GiTargetShot className="logo-icon" />
          Tasks
        </Link>
      </div>

      <ul>
        {user ? (
          <>
            <li>
              <Link to="/profile">
                <FaUser />
                {user && user.name}
              </Link>
            </li>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt />
              </button>
            </li>
          </>
        ) : (
          <>
            {location.pathname === "/register" ? (
              <li>
                <Link to="/login">
                  <FaSignInAlt className="login-icon" />
                  Zaloguj
                </Link>
              </li>
            ) : (
              <>
                {/* <li>
              <Link to="/login">
                <FaSignInAlt className="login-icon"/>
                Zaloguj
              </Link>
            </li> */}
                <li>
                  <Link className="btn" to="/register">
                    Rejestracja
                  </Link>
                </li>
              </>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
