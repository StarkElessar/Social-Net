import React from 'react';
import styled from 'styled-components';
import random from './random.module.css';

const userData = [
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-11.jpg', textName: 'Diand Amber' },
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-12.jpg', textName: 'Cris Haris' },
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-13.jpg', textName: 'Brian Walton' },
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-14.jpg', textName: 'Olivia Steward' },
  { avatarUrl: 'https://themified.com/friend-finder/images/users/user-15.jpg', textName: 'Sophia Page' },
];

const RandomFriend = (props) => {
  return (
    <Column>
      <Wrapper>
        <h3 className={random.title}>Подписаться</h3>
        {userData.map(({avatarUrl, textName}) => <RandomManBox avatarUrl={avatarUrl} textName={textName} /> )}
      </Wrapper>
    </Column>  
  )
}

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
  )
};



const Column = styled.section`
  grid-area: random;
  position: relative;
  height: 100%;
`;
const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5px;
  transition: all 250ms ease-in 0ms;
`;

// const rightSidebar = document.querySelector('.wrapper')
// window.addEventListener('scroll', () => {
//   if (document.documentElement.scrollTop > 100) {
//     rightSidebar.classList.add('sticky');
//   } else {
//     rightSidebar.classList.remove('sticky');
//   }
// });

export default RandomFriend;