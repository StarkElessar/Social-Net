import React, { useEffect, useRef, useState } from 'react';
import {Column, Wrapper, Title} from './StyledComponents';
import RandomFriendItem from './small-components/RandomFriendItem';


// Main Component ================================================================================================================================================================================================
const RandomFriendSection = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();
  const handleScroll = () => setIsSticky(ref.current.getBoundingClientRect().top < 86);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Column ref={ref} className="column">
      <Wrapper isSticky={isSticky} className="wrap">
        <Title>Подписаться</Title>
        {
          props.randomFriendsSection.userData.map(({ avatarUrl, textName }) => (
            <RandomFriendItem
              avatarUrl={avatarUrl}
              key={avatarUrl}
              textName={textName}
            />
        ))}
      </Wrapper>
    </Column>  
  );
};

// Components ========================================================================================================================================================================================================================================================================================

// Styled Components ================================================================================================================================================================================================================================================================================================


export default RandomFriendSection;
