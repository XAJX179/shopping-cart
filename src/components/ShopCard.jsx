function ShopCard({ uid, title, price, count, onChange, isErrored }) {
  let error = null;
  if (isErrored || count == 0) {
    error = <p>Error: can only enter a number between 1 and 10.</p>;
  }
  let addCartBtn = <button>Add to cart</button>;
  if (count == 0) {
    addCartBtn = <button disabled>Add to cart</button>;
  }
  return (
    <div className="card" data-id={uid}>
      <img alt="" />
      <p>name: {title}</p>
      <p>price: {price}$</p>
      <label htmlFor={"itemCount" + uid}></label>
      <div className="count">
        {error}
        <button className="decrement">-</button>
        <input
          type="text"
          name={"itemCount" + uid}
          id={"itemCount" + uid}
          value={count}
          onChange={(e) => onChange(e)}
        />
        <button className="increment">+</button>
        {addCartBtn}
      </div>
    </div>
  );
}

export default ShopCard;
