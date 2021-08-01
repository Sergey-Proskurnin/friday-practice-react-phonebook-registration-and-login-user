import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAuthenticate = useSelector(getIsAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticate ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
