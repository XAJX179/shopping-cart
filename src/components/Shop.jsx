import { useOutletContext } from "react-router";
import ShopCard from "./ShopCard";

function Shop() {
  const [cart, setCart] = useOutletContext();
  return (
    <>
      <header>
        <h1>Shop</h1>
        <p>Shop page</p>
      </header>
      {cart.map((e) => {
        return (
          <ShopCard
            key={e.uid}
            uid={e.uid}
            title={e.title}
            price={e.price}
            count={e.numOfItems}
            onChange={handleNumChange}
          />
        );
      })}
    </>
  );
  function handleNumChange(e) {
    const uid = e.target.parentElement.parentElement.dataset.id;

    const index = cart.findIndex((e) => {
      return e.uid == uid;
    });

    const cartCopy = [...cart];

    cartCopy[index].numOfItems = e.target.value;

    setCart(cartCopy);
  }
}

export default Shop;
