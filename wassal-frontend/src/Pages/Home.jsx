import { useState } from "react";
import { Login, LoginContext } from "../Components/Login";
import { Navbar } from "../Components/Navbar";
import { Categories } from "../Components/Categories";
import { Search } from "../Components/Search";
import { Footer } from "../Components/Footer";

export function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ showLogin, setShowLogin }}>
        <Navbar />
        <Login />
      </LoginContext.Provider>
      <h3 style={{ textAlign: "center" }}>Fast delivery for all your orders</h3>
      <br />
      <Search />
      <br />
      <Categories />
      <Footer />
    </>
  );
}
