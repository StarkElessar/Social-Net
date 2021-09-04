import React from 'react';
import styled from 'styled-components';
import sidebar from './sidebar.module.css';

const Sidebar = (props) => {
  return (
    <Column>
      <ProfileCard />
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
    </Column>
  )
};


const ProfileCard = () => {
  return (
    <ProfCard>
      <ImgAvatar src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="avatar-author" />
      <LinkName href="#">Sarah Cruiz</LinkName>
      <LinkFollowers><i class="far fa-plus-square"></i> 1,299 followers</LinkFollowers>
    </ProfCard>

  )
};

const Column = styled.section`
  position: relative;
  grid-area: nav;
  background: #fff;
`;
const ProfCard = styled.div`
  background: linear-gradient(to bottom, rgba(39,170,225,.8), rgba(28,117,188,.8)), url('https://themified.com/friend-finder/images/covers/1.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 90px;
  border-radius: 4px;
  padding: 10px 20px;
  color: #fff;
  margin-bottom: 40px;
`;
const ImgAvatar = styled.img`
  border: 7px solid #fff;
  float: left;
  margin-right: 20px;
  position: relative;
  top: -30px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;
const LinkName = styled.a`
  font-size: 15px;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-decoration: none;
  line-height: 110#;
  margin: 0 0 10px 0;
  transition: all 350ms ease-in 0ms;

  &:hover {
    border-bottom: 1px solid;
  }
`;
const LinkFollowers = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-decoration: none;
  margin-top: 10px;
  transition: all 350ms ease-in 0ms;

  &:hover {
    border-bottom: 1px solid;
  }

  & i {
    padding-top: 2px;
    margin-right: 5px;
  }
`;

export default Sidebar;