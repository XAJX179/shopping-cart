import { Link } from "react-router";

function Home() {
  return (
    <>
      <header>
        <h1>Homepage</h1>
        <p>Welcome to the shopping cart demo</p>
      </header>
      <Link to={"/shop"}>Start shopping</Link>
    </>
  );
}

export default Home;
