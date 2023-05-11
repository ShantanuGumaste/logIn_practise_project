import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/authContext';

const Navigation = () => {
  const loggedStatus = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {loggedStatus.authIsLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {loggedStatus.authIsLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {loggedStatus.authIsLoggedIn && (
          <li>
            <button onClick={loggedStatus.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
