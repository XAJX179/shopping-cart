import { useOutletContext } from "react-router";

function Cart() {
  const [cart, setCart] = useOutletContext();
  return (
    <>
      <header>
        <h1>Cart</h1>
        <p>Cart page</p>
      </header>
    </>
  );
}

export default Cart;
