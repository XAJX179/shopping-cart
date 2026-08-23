function ShopCard() {
  return (
    <div className="card">
      <img alt="" />
      <p>name: bag</p>
      <p>price: 10$</p>
      <label htmlFor="item1count"></label>
      <div className="count">
        <button>-</button>
        <input type="text" name="numOfItems1" id="item1count" />
        <button>+</button>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default ShopCard;
