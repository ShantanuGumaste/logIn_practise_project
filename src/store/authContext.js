import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    authIsLoggedIn: false
})

export const AuthContextProvider = (props) => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const checkLoggedIn = localStorage.getItem("isLoggedIn");
      if (checkLoggedIn === "1") {
        setIsLoggedIn(true);
      }
    }, []);

      const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
      };

        const logoutHandler = () => {
          localStorage.removeItem("isLoggedIn");
          setIsLoggedIn(false);
        };

        return (
          <AuthContext.Provider
            value={{ authIsLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}
          >
            {props.children}
          </AuthContext.Provider>
        );
        
}
 
export default AuthContext;