import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { show } from "../redux/actions/popup";

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const redirect = () => {
    dispatch(show("You need to be logged in."));
    return <Navigate to="/login" />;
  };

  if (user.logged && user.userInfo.isAdmin === true) {
    return children[0];
  }
  if (user.logged && user.userInfo.isAdmin === false) {
    return children[1];
  }
  if (!user.logged) {
    return redirect();
  }
};
