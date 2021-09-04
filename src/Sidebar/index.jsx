import React from 'react';
import styled from 'styled-components';
import sidebar from './sidebar.module.css';

const Sidebar = (props) => {
  return (
    <Wrapper>
      <nav className={sidebar.navbar}>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Musics</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  grid-area: nav;
  background: rgb(82, 36, 36);
`;

export default Sidebar;