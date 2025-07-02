import { useState } from "react";
import { Login, LoginContext } from "../Components/Login";
import { Navbar } from "../Components/Navbar";

export function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ showLogin, setShowLogin }}>
        <Navbar />
        <Login />
        <h1>This is the home page</h1>
      </LoginContext.Provider>
    </>
  );
}
