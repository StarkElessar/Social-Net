import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Sticky } from 'react-sticky';

const navLinksData = [
  { url: '/profile', title: 'Profile' },
  { url: '/messages', title: 'Messages' },
  { url: '/news', title: 'News' },
  { url: '/musics', title: 'Musics' },
  { url: '/videos', title: 'Videos' },
  { url: '/setting', title: 'Settings' },
];

const userOnlineData = [
  { titleLink: 'Linda Lohan', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-2.jpg' },
  { titleLink: 'Sophia Lee', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-3.jpg' },
  { titleLink: 'John Doe', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-4.jpg' },
  { titleLink: 'Alexis Clark', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-5.jpg' },
  { titleLink: 'James Carter', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-6.jpg' },
  { titleLink: 'Robert Cook', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-7.jpg' },
  { titleLink: 'Richard Bell', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-8.jpg' },
  { titleLink: 'Anna Young', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-9.jpg' },
  { titleLink: 'Julia Cox', userAvatarUrl: 'https://themified.com/friend-finder/images/users/user-10.jpg' }
];

const Sidebar = (props) => {
  return (
    <Column>
      <ProfileCard />
      <MenuNavbar>
        <ul>
          {navLinksData.map(({ url, title }) => (
            <NavLinks
              key={url}
              title={title}
              url={url}
            />
          ))}
        </ul>
      </MenuNavbar>
      <ChatOnlineBlock />
    </Column>
  )
};

const ProfileCard = () => {
  return (
    <ProfCard>
      <ImgAvatar src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="avatar-author" />
      <LinkName href="https://google.com">Sarah Cruiz</LinkName>
      <LinkFollowers><i className="far fa-plus-square"></i> 1,299 followers</LinkFollowers>
    </ProfCard>
  )
};

const NavLinks = (props) => {
  return (
    <li><a href={props.url}>{props.title}</a></li>
  )
};

const ChatOnlineBlock = (props) => {
  return (
    <UserBlock>
      <UserBlockTitle>Chat online</UserBlockTitle>
      <ListUsers>
        {userOnlineData.map(({ titleLink, userAvatarUrl }) => (
          <UserOnline
            key={userAvatarUrl}
            titleLink={titleLink}
            userAvatarUrl={userAvatarUrl}
          />
        ))}
      </ListUsers>
    </UserBlock>
  )
};

const UserOnline = (props) => {
  return (
    <li>
      <a href="https://google.com" title={props.titleLink}>
        <UserAvatarImg src={props.userAvatarUrl} alt="user" />
        <OnlineDot />
      </a>
    </li>
  )
};

const UserBlock = styled.div`
  position: sticky;
  top: 85px;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Lato', sans-serif;
  line-height: 26px;
  color: #6d6e71;
  font-size: 13px;
  transition: all 650ms ease-in 0ms;
`;
const UserBlockTitle = styled.div`
  background: #8dc63f;
  padding: 2px 20px;
  width: 170px;
  height: 30px;
  border-radius: 15px;
  margin: 0 auto 20px;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 600;
`;
const ListUsers = styled.ul`
  padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    margin: 0;
    list-style: none;

    & li {
    display: inline-block;
    position: relative;
    margin: 3px auto !important;
    padding-left: 2px;
    padding-right: 2px;
    }
`;
const UserAvatarImg = styled.img`
  display: block;
  height: 58px;
  width: 58px;
  max-width: 100%;
  border-radius: 50%;
  vertical-align: middle;
`;
const OnlineDot = styled.span`
  background: linear-gradient(to bottom, rgba(141,198,63, 1), rgba(0,148,68, 1));
  border: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  bottom: -6px;
  border: 2px solid #fff;
  left: 0;
  right: 0;
  margin: auto;
`;

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
  line-height: 110%;
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
  & i {
    padding-top: 2px;
    margin-right: 5px;
  }
`;

const MenuNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  & ul li:last-child {
    margin-top: 60px;
  }
  & ul li a {
    color: #6d6e71;
    text-decoration: none;
    font-size: 24px;
    text-align: center;
    transition: all 150ms ease-in 0ms;
  }
  & ul li a:hover {
    color: rgb(26, 132, 165);
    letter-spacing: 1px;
  }
`;

export default Sidebar;