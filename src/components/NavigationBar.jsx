import { Link } from "react-router";

function NavigationBar() {
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
          <Link to="/cart">Cart (number of items)</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
