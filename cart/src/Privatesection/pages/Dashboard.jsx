import { useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const [auth, { handleSignout }] = useContext(AuthContext);
  console.log(auth);

  // Redirect
  if (!auth) {
    return <Redirect to="/login" />;
  }

  const movetoSetting = () => {
    return;
  };
  return (
    <div>
      Dashboard
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
    </div>
  );
}

export default Dashboard;
