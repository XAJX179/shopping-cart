function ShopCard({ uid, title, price, count, onChange }) {
  return (
    <div className="card" data-id={uid}>
      <img alt="" />
      <p>name: {title}</p>
      <p>price: {price}$</p>
      <label htmlFor={"itemCount" + uid}></label>
      <div className="count">
        <button className="decrement">-</button>
        <input
          type="text"
          name={"itemCount" + uid}
          id={"itemCount" + uid}
          value={count}
          onChange={(e) => onChange(e)}
        />
        <button className="increment">+</button>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default ShopCard;
