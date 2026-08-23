import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default App;
