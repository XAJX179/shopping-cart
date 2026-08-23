import { Link } from "react-router";

function NavigationBar({ cartItemsCount }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cartItemsCount}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
