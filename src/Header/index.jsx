import React from 'react';
import header from './header.module.css';
import logo from './../img/logo.png';
import search from './img/search-solid.svg';

const Header = (props) => {
  return (
    <header>
      <div className={header.container}>
        <a href="#" className={header.logo}>
          <img src={logo} alt="logo" />
          <span>SocialFor.</span>
        </a>
        <div className={header.navigation}>
          <div className={header.search}>
            <img src={search} alt="" />
            <form name="form_search" action="#">
              <input type="text" name="search" placeholder="Поиск друзей, новостей" />
            </form>
          </div>
          <div className={header.nav}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Newsfeed</a></li>
              <li><a href="#">Timeline</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;