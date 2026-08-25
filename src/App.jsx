import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [shop, setShop] = useData("https://fakestoreapi.com/products");
  const [cart, setCart] = useState([]);
  let cartItemsCount = cart.length;
  let outlet = <Outlet context={{ shop, setShop, cart, setCart }} />;
  return (
    <>
      <NavigationBar cartItemsCount={cartItemsCount} />
      {outlet}
    </>
  );
}
function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (url == "https://fakestoreapi.com/products") {
          json.map((e) => (e.numOfItems = 1));
        }
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return [data, setData];
}
export default App;
