import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Setting from "../pages/Setting";
import PrivateRoute from "./private";

function Routes() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute exact={true} path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact={true} path="/setting">
        <Setting/>
      </PrivateRoute>
      <Route path="/dashboard/setting"></Route>
    </>
  );
}

export default Routes;