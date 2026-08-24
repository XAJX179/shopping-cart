function ShopCard({
  uid,
  title,
  price,
  count,
  onChange,
  handleIncrement,
  handleDecrement,
  isErrored,
  onAddCart,
}) {
  let error = null;
  if (isErrored || count == 0) {
    error = <p>Error: can only enter a number between 1 and 10.</p>;
  }
  let addCartBtn = <button onClick={(e) => onAddCart(e)}>Add to cart</button>;
  if (count == 0) {
    addCartBtn = <button disabled>Add to cart</button>;
  }
  let decrementBtn;
  if (count >= 2 && count <= 10) {
    decrementBtn = (
      <button className="decrement" onClick={(e) => handleDecrement(e)}>
        -
      </button>
    );
  } else {
    decrementBtn = (
      <button disabled className="decrement">
        -
      </button>
    );
  }
  let incrementBtn;
  if (count >= 0 && count <= 9) {
    incrementBtn = (
      <button className="increment" onClick={(e) => handleIncrement(e)}>
        +
      </button>
    );
  } else {
    incrementBtn = (
      <button disabled className="increment">
        +
      </button>
    );
  }
  return (
    <div className="card" data-id={uid}>
      <img alt="" />
      <p>name: {title}</p>
      <p>price: {price}$</p>
      <label htmlFor={"itemCount" + uid}></label>
      <div className="count">
        {error}
        {decrementBtn}
        <input
          type="text"
          name={"itemCount" + uid}
          id={"itemCount" + uid}
          value={count}
          onChange={(e) => onChange(e)}
        />
        {incrementBtn}
      </div>
      {addCartBtn}
    </div>
  );
}

export default ShopCard;
