import React from "react";
import styled from "styled-components";
import { Avatar } from "./StyledComponents";

const Dialogs = (props) => {
  return (
    <UserDialogItems>
      <UserDialogItem>
        <Avatar>
          <img src="https://themified.com/friend-finder/images/users/user-2.jpg" alt="user-avatar" />
        </Avatar>
        <UserName>Тарас Шевченко</UserName>
      </UserDialogItem>
      <UserDialogItem>
        <Avatar>
          <img src="https://themified.com/friend-finder/images/users/user-3.jpg" alt="user-avatar" />
        </Avatar>
        <UserName>Тарас Шевченко</UserName>
      </UserDialogItem>
      <UserDialogItem>
        <Avatar>
          <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user-avatar" />
        </Avatar>
        <UserName>Тарас Шевченко</UserName>
      </UserDialogItem>
      <UserDialogItem>
        <Avatar>
          <img src="https://themified.com/friend-finder/images/users/user-5.jpg" alt="user-avatar" />
        </Avatar>
        <UserName>Тарас Шевченко</UserName>
      </UserDialogItem>
      <UserDialogItem>
        <Avatar>
          <img src="https://themified.com/friend-finder/images/users/user-6.jpg" alt="user-avatar" />
        </Avatar>
        <UserName>Тарас Шевченко</UserName>
      </UserDialogItem>
      
    </UserDialogItems>
  )
};

const UserDialogItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const UserDialogItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 150ms ease 0ms;
  &:hover {
    background: rgba(0,0,0,0.1);
  }
`;
const UserName = styled.h6`
  color: #333;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  margin-left: 20px
`;


export default Dialogs;