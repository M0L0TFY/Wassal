import { useState } from "react";
import { Login, LoginContext } from "../Components/Login";
import { Navbar } from "../Components/Navbar";
import { Categories } from "../Components/Categories";

export function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ showLogin, setShowLogin }}>
        <Navbar />
        <Login />
      </LoginContext.Provider>
      <Categories />
    </>
  );
}
