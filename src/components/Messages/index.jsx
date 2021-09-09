import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "./StyledComponents";

const Dialogs = (props) => {
  return (
    <UserDialogItems>
      <UserDialogItemComponent id='ums01' userAvatarUrl='https://themified.com/friend-finder/images/users/user-12.jpg' userName='Виктор Семенов' />
      <UserDialogItemComponent id='ums02' userAvatarUrl='https://themified.com/friend-finder/images/users/user-3.jpg' userName='Лариса Чабатарева' />
      <UserDialogItemComponent id='ums03' userAvatarUrl='https://themified.com/friend-finder/images/users/user-2.jpg' userName='Ирина Белая' />
      <UserDialogItemComponent id='ums04' userAvatarUrl='https://themified.com/friend-finder/images/users/user-4.jpg' userName='Иван Ольгович' />
      <UserDialogItemComponent id='ums05' userAvatarUrl='https://themified.com/friend-finder/images/users/user-5.jpg' userName='Марго Матюхова' />
      <UserDialogItemComponent id='ums06' userAvatarUrl='https://themified.com/friend-finder/images/users/user-6.jpg' userName='Грегор Чабатарева' />
      <UserDialogItemComponent id='ums07' userAvatarUrl='https://themified.com/friend-finder/images/users/user-7.jpg' userName='Гена Олехнович' />
      <UserDialogItemComponent id='ums08' userAvatarUrl='https://themified.com/friend-finder/images/users/user-8.jpg' userName='Вася Ивановна' />
      <UserDialogItemComponent id='ums09' userAvatarUrl='https://themified.com/friend-finder/images/users/user-9.jpg' userName='Олейна Свинная' />
      <UserDialogItemComponent id='ums10' userAvatarUrl='https://themified.com/friend-finder/images/users/user-10.jpg' userName='Илона Олехнович' />
      <UserDialogItemComponent id='ums11' userAvatarUrl='https://themified.com/friend-finder/images/users/user-11.jpg' userName='Наталья Ивановна' />
    </UserDialogItems>
  )
};

const UserDialogItemComponent = (props) => {
  return (
    <UserDialogItem to={'/dialogs/' + props.id}>
        <Avatar>
          <img src={props.userAvatarUrl} alt="user-avatar" />
        </Avatar>
        <UserName>{props.userName}</UserName>
        <BtnDel>
          <TextDelDialog>
            <span>Удалить чат</span>
          </TextDelDialog>
        </BtnDel>
    </UserDialogItem>
  )
};

// Styled Components ====================================================================================================================================================================================================
const UserDialogItems = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid rgb(220,220,220);
  border-radius: 4px;
  overflow-y: auto;
  height: 550px;
  ::-webkit-scrollbar { width: 4px;}
  ::-webkit-scrollbar-button {  none; }
  ::-webkit-scrollbar-track {  background-color: #999;}
  ::-webkit-scrollbar-track-piece { background-color: #ffffff;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
  ::-webkit-scrollbar-corner { background-color: #999;}}
  ::-webkit-resizer { background-color: #666;}
`;
const UserDialogItem = styled(NavLink)`
  position: relative;
  display: flex;
  width: 100%;
  text-decoration: none;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  box-sizing: border-box;
  border-box: 4px;
  transition: all 150ms ease 0ms;
  &:hover {
    background: rgb(245, 245, 245);
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 470px;
    height: 0.5px;
    background: rgb(220,220,220);
    transition: all 350ms ease 0ms;
  }
  &:before {
    bottom: 0;
  }
  &:after {
    top: 0;
  }
  &:first-child:after {
    height: 0px;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
  }
  a & {
    width: 100%;
  }
`;
const UserName = styled.h6`
  color: #333;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  margin-left: 20px
`;
const BtnDel = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 16px;
  height: 16px;
  opacity: 0;
  display: none;
  border: none;
  transition: all 200ms ease-in 0ms;
  background: transparent;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 12px;
    height: 2px;
    background: rgb(200,200,200);
    transition: all 150ms ease-in 0ms;
  }
  &:before {
    transform: translate(-50%,-50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%,-50%) rotate(-45deg);
  }
  ${UserDialogItem}:hover & {
    opacity: 1;
    display: block;
  }
  ${UserDialogItem} &:hover:before,
  ${UserDialogItem} &:hover:after {
    background: rgb(120,120,120);
  }
`;
const TextDelDialog = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background: rgba(0,0,0,0.8);
  width: 85px;
  height: 22px;
  border-radius: 4px;
  top: 50px;
  right: -4px;
  opacity: 0;
  visibility: hidden;
  transition: all 50ms ease-in-out 0ms;
  &:before {
    content: '';
    position: absolute;
    border: 5px solid transparent;
    border-bottom: 5px solid rgba(0,0,0,0.8);
    top: -10px;
    right: 7px;
  }
  & span {
    position: relative;
    color: #fff;
    font-size: 12px;
    font-family: 'Montserrat';
  }
  ${BtnDel}:hover & {
    top: 25px;
    right: -4px;
    opacity: 1;
    visibility: visible;
  }
`;

export default Dialogs;