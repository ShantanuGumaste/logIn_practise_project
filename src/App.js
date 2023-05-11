import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/authContext";

function App() {
  const loggedInStatus = useContext(AuthContext)
  return (
    <>
      <MainHeader />
      <main>
        {!loggedInStatus.authIsLoggedIn && <Login />}
        {loggedInStatus.authIsLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
