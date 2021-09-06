import React from "react";
import { RandomFriendItemWrapper, RandomFriendAvatar, RandomFriendLinks } from './../StyledComponents';

const RandomFriendItem = (props) => {
  return (
    <RandomFriendItemWrapper>
      <RandomFriendAvatar>
        <img src={props.avatarUrl} alt="avatar" />
      </RandomFriendAvatar>
      <RandomFriendLinks>
        <a href="https://google.com" className='name'>{props.textName}</a>
        <a href="https://google.com" className='follow-link'>Подписаться</a>
      </RandomFriendLinks>
    </RandomFriendItemWrapper>
  );
};


export default RandomFriendItem;