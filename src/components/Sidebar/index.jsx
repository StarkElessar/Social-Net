import React from 'react';
import { Column, MenuNavbar, UserBlock, UserBlockTitle, ListUsers } from "./StyledComponents";
import NavLinks from './small-components/NavLinks';
import ProfileCard from './small-components/ProfileCard';
import UserOnline from './small-components/UserOnline';
// import ChatOnlineBlock  from './small-components/ChatOnlineBlock'; 

import { useEffect, useRef, useState } from 'react';
// Main Component ==============================================================================================================================================================================================================
const Sidebar = (props) => {

    const [isSticky, setIsSticky] = useState(false);
    const ref = useRef();
    const handleScroll = () => setIsSticky(ref.current.getBoundingClientRect().top < -300);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <Column ref={ref}>
      <ProfileCard />
      <MenuNavbar>
        <ul>
          {props.sidebar.navLinksData.map(({ url, title }) => (
            <NavLinks
              key={url}
              title={title}
              url={url}
            />
          ))}
        </ul>
      </MenuNavbar>
      {/* <ChatOnlineBlock userOnlineData={props.sidebar.userOnlineData} /> */}
      <UserBlock isSticky={isSticky} >
        <UserBlockTitle>Chat online</UserBlockTitle>
        <ListUsers>
          {props.sidebar.userOnlineData.map(({ titleLink, userAvatarUrl }) => (
            <UserOnline
              key={userAvatarUrl}
              titleLink={titleLink}
              userAvatarUrl={userAvatarUrl}
            />
          ))}
        </ListUsers>
      </UserBlock>
    </Column>
  )
};

// Components ================================================================================================================================================================================================================================================================================================

// Styled Components ================================================================================================================================================================================================


export default Sidebar;