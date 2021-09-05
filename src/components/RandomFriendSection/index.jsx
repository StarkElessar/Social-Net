import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import random from './random.module.css';

const userData = [
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-11.jpg', textName: 'Diand Amber' },
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg', textName: 'Cris Haris' },
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-13.jpg', textName: 'Brian Walton' },
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-14.jpg', textName: 'Olivia Steward' },
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-15.jpg', textName: 'Sophia Page' },
];

const RandomFriendSection = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();
  const handleScroll = () => setIsSticky(ref.current.getBoundingClientRect().top < 86);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Column ref={ref}>
      <Wrapper isSticky={isSticky} className="wrap">
        <h3 className={random.title}>Подписаться</h3>
        {userData.map(({avatarUrl, textName}) => (
          <RandomManBox
            avatarUrl={avatarUrl}
            key={avatarUrl}
            textName={textName}
          />
        ))}
      </Wrapper>
    </Column>  
  );
};

const RandomManBox = (props) => {
  return (
    <div className={random.manBox}>
      <div className={random.avatar}>
        <img src={props.avatarUrl} alt="avatar" />
      </div>
      <div className={random.links}>
        <a href="#" className={random.name}>{props.textName}</a>
        <a href="#" className={random.followLink}>Подписаться</a>
      </div>
    </div>
  );
};

const Column = styled.section``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: ${({ isSticky }) => isSticky ? '0' : '0px' };
  padding-left: 5px;
  position: ${({ isSticky }) => isSticky ? 'fixed' : 'relative' };
  transition: all 350ms ease-in 0ms;
`;

export default RandomFriendSection;
