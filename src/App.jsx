import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { useState } from "react";
import { useLocation } from "react-router";

function App() {
  const [cart, setCart] = useState([
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
  let cartItemsCount = 0;
  let outlet;
  if (useLocation().pathname == "/home") {
    outlet = <Outlet />;
  } else {
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
