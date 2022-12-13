
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  return (
    <nav className='navbar'>
      <div className='left-side'>
        <NavLink exact to="/">
          <div className='left-side'>
            <img src='image/SnackoverflowLogo-removebg-preview.png' alt='Logo' className='logo'></img>
          </div>
        </NavLink>
        <div className='middle'>
          <SearchBar/>
        </div>
      </div>
      <ul>
        {!sessionUser ?
          <>
            <span>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </span>
            <span>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </span>
          </>
          : ""}
        <span>
          <NavLink to='/ask' exact={true} activeClassName='active'>
            Ask Question
          </NavLink>
        </span>
        <span>
          <NavLink to='/questions' exact={true} activeClassName='active'>
            Questions
          </NavLink>
        </span>
        {sessionUser ?
          <span>
            <LogoutButton />
          </span>
          : ''}
      </ul>
    </nav>
  );
}

export default NavBar;
