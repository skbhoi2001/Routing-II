import { Route } from "react-router-dom";
import CartItem from "../pages/CartItem";
import Products from "../pages/Products";


function Routes() {
  return (
    <>
      <Route exact path="/">
          <Products/>
      </Route>
      <Route exact path="/cartItem">
        <CartItem/>
      </Route>
    </>
  );
}

export default Routes;