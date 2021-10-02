import React from 'react';
import { Column, MenuNavbar } from "./StyledComponents";
import NavLinks from './small-components/NavLinks';
import ProfileCard from './small-components/ProfileCard';
import ChatOnlineBlock  from './small-components/ChatOnlineBlock'; 
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
      <ChatOnlineBlock userOnlineData={props.sidebar.userOnlineData} isSticky={isSticky}/>
      
    </Column>
  )
};

// Components ================================================================================================================================================================================================================================================================================================

// Styled Components ================================================================================================================================================================================================


export default Sidebar;