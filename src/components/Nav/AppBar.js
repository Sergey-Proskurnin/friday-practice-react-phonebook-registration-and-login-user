import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";

const styles = {
  navigation: {
    display: "flex",
    justifyContent: "space-between",
  },
};

const AppBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  return (
    <nav style={styles.navigation}>
      <div>
        <NavLink to="/" exact>
          {" "}
          Home{" "}
        </NavLink>
        {isAuth && <NavLink to="/contacts"> Contacts </NavLink>}
      </div>
      {isAuth ? (
        <button onClick={() => dispatch(logout())}>Log out</button>
      ) : (
        <div>
          <NavLink to="/register"> Register </NavLink>
          <NavLink to="/login"> Login </NavLink>
        </div>
      )}
    </nav>
  );
};

export default AppBar;
