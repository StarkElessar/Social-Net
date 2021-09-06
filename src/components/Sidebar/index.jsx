import React from 'react';
import { Column, MenuNavbar } from "./StyledComponents";
import NavLinks from './small-components/NavLinks';
import ProfileCard from './small-components/ProfileCard';
import ChatOnlineBlock  from './small-components/ChatOnlineBlock'; 

// Main Component ==============================================================================================================================================================================================================
const Sidebar = (props) => {
  return (
    <Column>
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
      <ChatOnlineBlock userOnlineData={props.sidebar.userOnlineData}/>
    </Column>
  )
};

// Components ================================================================================================================================================================================================================================================================================================

// Styled Components ================================================================================================================================================================================================


export default Sidebar;