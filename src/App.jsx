import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { useState } from "react";
import { useLocation } from "react-router";

function App() {
  const [shop, setShop] = useState([
    {
      uid: 10,
      title: "example card",
      price: "10",
      numOfItems: "1",
      url: "../public/favicon.svg",
    },
    {
      uid: 11,
      title: "example card 2",
      price: "15",
      numOfItems: "2",
      url: "../public/favicon.svg",
    },
  ]);
  const [cart, setCart] = useState([]);
  let cartItemsCount = 0;
  let outlet;
  let path = useLocation().pathname;
  if (path == "/home") {
    outlet = <Outlet />;
  } else if (path == "/shop") {
    outlet = <Outlet context={[shop, setShop, cart, setCart]} />;
  } else if (path == "/cart") {
    outlet = <Outlet context={[cart, setCart]} />;
  }
  return (
    <>
      <NavigationBar cartItemsCount={cartItemsCount} />
      {outlet}
    </>
  );
}

export default App;
