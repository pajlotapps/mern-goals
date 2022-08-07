import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { GiTargetShot } from "react-icons/gi";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

import { Link, useNavigate, useLocation } from "react-router-dom";

function HeaderToolbar({ open }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const toggleDrawer = () => {
    // setOpen(!open);
  };

  return (
    <>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
                  <div className="headerToolbar">

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <div className="logo">
            <Link to="/">
              <GiTargetShot className="logo-icon" />
            </Link>
          </div>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Tasks
          </Typography>
            <div>
          <ul >
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
          </div>
        {/* <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
      </Toolbar>
    </>
  );
}

export default HeaderToolbar;
