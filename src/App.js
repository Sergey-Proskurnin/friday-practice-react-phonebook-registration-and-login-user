import "./App.css";
import AppBar from "./components/Nav/AppBar";
import { Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "./redux/auth/auth-selectors";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivatRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, isAuth]);
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <PublicRoute path="/" exact component={HomePage} />
        <PrivateRoute
          path="/contacts"
          redirectTo="/login"
          component={ContactsPage}
        />
        <PublicRoute
          restricted
          path="/login"
          redirectTo="/contacts"
          component={LoginPage}
        />
        <PublicRoute
          redirectTo="/contacts"
          restricted
          path="/register"
          exact
          component={RegisterPage}
        />
      </Switch>
    </div>
  );
};

export default App;
