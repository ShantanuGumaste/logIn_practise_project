import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/authContext';

const Navigation = (props) => {

  const loggedInStatus = useContext(AuthContext)

  return (
          <nav className={classes.nav}>
            <ul>
              {loggedInStatus.authIsLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {loggedInStatus.authIsLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {loggedInStatus.authIsLoggedIn && (
                <li>
                  <button onClick={loggedInStatus.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
  );
};

export default Navigation;
