import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ path, exact, children }) {
  const [auth] = useContext(AuthContext);
  console.log(auth);
  // if (!auth) {
  //   console.log(auth, "redirect");
  //   return <Redirect to="/login" />;
  // }
  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default PrivateRoute;