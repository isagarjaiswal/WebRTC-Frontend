import React from "react";
import { Route } from "react-router-dom";
import { useFirebase } from "../../context";
import { LoginPage } from "../../pages";

function ProtectedRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useFirebase();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <LoginPage {...props} />
      }
    />
  );
}

export default ProtectedRoute;
