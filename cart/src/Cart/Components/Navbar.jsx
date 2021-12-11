import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
      <div>
        <Link to="/">Products</Link>
      </div>
      <div>
        <Link to="/cartItem">CartItem</Link>
      </div>
    </div>
  );
}

export default Navbar;