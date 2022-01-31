import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import { logout } from "../../redux/actions/auth";
import "../../styles/Variables.scss";
import "./Navbar.css";

export const Navbar = () => {
  const { shoppingCart } = useContext(GlobalContext);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <nav className="navbar-container sticky">
      <NavLink
        className={(navData) => (navData.isActive ? "nav-link" : "nav-link")}
        to="/"
      >
        <div className="nav-left">
          <DirectionsBikeIcon className="" fontSize="large" />
          <h4 className="nav-link">BIKEVILLE</h4>
        </div>
      </NavLink>

      <div className="nav-right">
        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/showroom"
        >
          <div>
            <p>PRODUCTS</p>
          </div>
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/contact"
        >
          <div>
            <p>CONTACT</p>
          </div>
        </NavLink>

        {/* REGISTER CONDITIONAL RENDERING */}
        {user?.logged === true && user.userInfo.isAdmin ? (
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="/dashboard"
          >
            <div className="underline">
              <p>DASHBOARD</p>
            </div>
          </NavLink>
        ) : null}

        {user?.logged === true ? null : (
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="/registration"
          >
            <div className="underline">
              <p>REGISTER</p>
            </div>
          </NavLink>
        )}

        {/* LOGIN / LOGOUT CONDITIONAL RENDERING */}
        {user?.logged === true ? (
          <NavLink
            onClick={handleLogout}
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            <div className="underline">
              <p>LOGOUT</p>
            </div>
          </NavLink>
        ) : (
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
            to="/login"
          >
            <div className="underline">
              <p>LOGIN</p>
            </div>
          </NavLink>
        )}

        {user?.logged === true ? (
          <div className="logged">
            <p>{user.userInfo.first_name}</p>
            <Link to="/shopping_cart">
              <div className="cart-icon">
                <Badge badgeContent={shoppingCart?.length} color="primary">
                  <ShoppingCartOutlinedIcon
                    fontSize="large"
                    className="nav-link nav-icon"
                    color="action"
                  />
                </Badge>
              </div>
            </Link>
          </div>
        ) : (
          <Link to="/shopping_cart">
            <div className="cart-icon">
              <Badge badgeContent={shoppingCart?.length} color="primary">
                <ShoppingCartOutlinedIcon
                  fontSize="large"
                  className="nav-link nav-icon"
                  color="action"
                />
              </Badge>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};
