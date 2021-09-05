import React from 'react';
import styled from 'styled-components';
import header from './header.module.css';
import logo from '../../img/logo.png';
import search from './img/search-solid.svg';

const MainHeader = (props) => {
  return (
    <Header>
      <Сontainer>
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
      </Сontainer>
    </Header>
  )
}

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  background: #231f20;
  z-index: 10;
`;

const Сontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1070px;
  height: 60px;
  padding: 10px 20px;
  margin: 0 auto;
`;

export default MainHeader;
