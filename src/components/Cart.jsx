import { useOutletContext } from "react-router";
import ShopCard from "./ShopCard";
import { useState } from "react";

function Cart() {
  const { cart, setCart } = useOutletContext();
  const [errorsId, setErrorsId] = useState([]);
  if (!cart) {
    return <p>Loading cart...</p>;
  }
  return (
    <>
      <header>
        <h1>Cart</h1>
        <p>Cart page</p>
      </header>
      <div className="cart-items">
        {cart.map((e) => {
          return (
            <ShopCard
              key={e.id}
              uid={e.id}
              title={e.title}
              price={e.price}
              count={e.numOfItems}
              imageUrl={e.image}
              onChange={handleNumChange}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
              isErrored={errorsId.includes(String(e.id))}
              cartPage={true}
            />
          );
        })}
      </div>
    </>
  );

  function handleDelete(e) {
    const uid = e.target.parentElement.dataset.id;
    const index = cart.findIndex((e) => {
      return e.id == uid;
    });
    if (index >= 0) {
      const cartCopy = cart.toSpliced(index, 1);
      setCart(cartCopy);
    }
  }

  function handleIncrement(e) {
    const uid = e.target.parentElement.parentElement.dataset.id;
    const index = cart.findIndex((e) => {
      return e.id == uid;
    });
    let item = cart[index];
    let numOfItems = item.numOfItems;

    numOfItems++;
    const cartCopy = [...cart];
    if (validCount(numOfItems)) {
      cartCopy[index].numOfItems = numOfItems;
      setCart(cartCopy);
    }
  }
  function handleDecrement(e) {
    const uid = e.target.parentElement.parentElement.dataset.id;
    const index = cart.findIndex((e) => {
      return e.id == uid;
    });
    let item = cart[index];
    let numOfItems = item.numOfItems;

    numOfItems--;
    const cartCopy = [...cart];
    if (validCount(numOfItems)) {
      cartCopy[index].numOfItems = numOfItems;
      setCart(cartCopy);
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
      const index = cart.findIndex((e) => {
        return e.id == uid;
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

export default Cart;
