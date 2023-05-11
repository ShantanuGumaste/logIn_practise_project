import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/authContext';

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(loggedStatus) => {
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
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
