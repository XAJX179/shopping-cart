import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";
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
