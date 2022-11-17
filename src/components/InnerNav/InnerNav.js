import { Link, NavLink } from "react-router-dom";
import * as userService from "../../utils/users-service";
import React from 'react';
import styles from './InnerNav.module.css';
import {SearchBar} from '../SearchBar/SearchBar';


const InnerNav = (props, { user, setUser }) => {
  const handleLogOut = () => {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  };

  return (
    <nav>
      <div className={styles['inner-nav']}>
            <Link to='/'><img src={logo} className={styles.logo} alt='logo' /></Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <button className={`button ${styles['inner-button']}`}>Sign In</button>
            <button className={`button ${styles['inner-button']}`}>Register</button>
      
            <span>Welcome, {user.name}</span>&nbsp;&nbsp;
      
            <NavLink to="" onClick={handleLogOut}>
              Log Out
            </NavLink>
        </div>
    </nav>
  );
};

export default InnerNav;