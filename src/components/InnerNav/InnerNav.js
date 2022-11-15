import { Link, NavLink } from "react-router-dom";
import * as userService from "../../utils/users-service";
import React from 'react';
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';


const NavBar = (props, { user, setUser }) => {
  const handleLogOut = () => {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  };
  return (
    <nav>
      <div className={styles['nav-bar']}>
            <Link to='/'><img src={logo} className={styles.logo} alt='belb logo' /></Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
      
            <span>Welcome, {user.name}</span>&nbsp;&nbsp;
      
            <NavLink to="" onClick={handleLogOut}>
              Log Out
            </NavLink>
        </div>
    </nav>
  );
};

export default NavBar;
