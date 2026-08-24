import { useOutletContext } from "react-router";
import ShopCard from "./ShopCard";
import { useState } from "react";

function Shop() {
  const [shop, setShop, cart, setCart] = useOutletContext();
  const [errorsId, setErrorsId] = useState([]);
  return (
    <>
      <header>
        <h1>Shop</h1>
        <p>Shop page</p>
      </header>
      {shop.map((e) => {
        return (
          <ShopCard
            key={e.uid}
            uid={e.uid}
            title={e.title}
            price={e.price}
            count={e.numOfItems}
            onChange={handleNumChange}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            isErrored={errorsId.includes(String(e.uid))}
          />
        );
      })}
    </>
  );

  function handleIncrement(e) {
    const uid = e.target.parentElement.parentElement.dataset.id;
    const index = shop.findIndex((e) => {
      return e.uid == uid;
    });
    let item = shop[index];
    let numOfItems = item.numOfItems;

    numOfItems++;
    const shopCopy = [...shop];
    if (validCount(numOfItems)) {
      shopCopy[index].numOfItems = numOfItems;
      setShop(shopCopy);
    }
  }
  function handleDecrement(e) {
    const uid = e.target.parentElement.parentElement.dataset.id;
    const index = shop.findIndex((e) => {
      return e.uid == uid;
    });
    let item = shop[index];
    let numOfItems = item.numOfItems;

    numOfItems--;
    const shopCopy = [...shop];
    if (validCount(numOfItems)) {
      shopCopy[index].numOfItems = numOfItems;
      setShop(shopCopy);
    }
  }

  function handleNumChange(e) {
    const uid = e.target.parentElement.parentElement.dataset.id;
    const value = e.target.value;

    if (!validCount(value)) {
      if (!errorsId.includes(uid)) {
        setErrorsId([...errorsId, uid]);
      }
    } else {
      const index = shop.findIndex((e) => {
        return e.uid == uid;
      });

      const shopCopy = [...shop];

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
      shopCopy[index].numOfItems = count;

      setShop(shopCopy);
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
