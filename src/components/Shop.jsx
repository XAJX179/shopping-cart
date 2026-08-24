import { useOutletContext } from "react-router";
import ShopCard from "./ShopCard";
import { useState } from "react";

function Shop() {
  const [cart, setCart] = useOutletContext();
  const [errorsId, setErrorsId] = useState([]);
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
            isErrored={errorsId.includes(String(e.uid))}
          />
        );
      })}
    </>
  );
  function handleNumChange(e) {
    const uid = e.target.parentElement.parentElement.dataset.id;
    const value = e.target.value;

    if (!validCount(value)) {
      if (!errorsId.includes(uid)) {
        setErrorsId([...errorsId, uid]);
      }
    } else {
      const index = cart.findIndex((e) => {
        return e.uid == uid;
      });

      const cartCopy = [...cart];

      let count;
      if (value == "") {
        count = 0;
        if (!errorsId.includes(uid)) {
          setErrorsId([...errorsId, uid]);
        }
      } else {
        count = parseInt(value);
        let copyErrorsId = [...errorsId];
        let errorIndex = copyErrorsId.findIndex((e) => e == uid);
        copyErrorsId.splice(errorIndex, 1);
        setErrorsId(copyErrorsId);
      }
      cartCopy[index].numOfItems = count;

      setCart(cartCopy);
    }
  }

  function validCount(value) {
    let result = false;
    if ((value >= 1 && value <= 10) || value == "") {
      result = true;
    }
    return result;
  }
}

export default Shop;
