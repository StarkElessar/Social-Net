import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ContainerMessages = (props) => {
  return (
    <Wrapper>
      <Header>
        <LeftBlock to='/dialogs'>
          <span>Назад</span>
        </LeftBlock>
        <CenterBlock>
          <h5>Виктор Семенов</h5>
        </CenterBlock>
        <RightBlock>
          <UserAvatar>
            <img src="https://themified.com/friend-finder/images/users/user-12.jpg" alt="user-avatar" />
          </UserAvatar>
        </RightBlock>
      </Header>
      <Body>
        <UserMessage
          userAvatarUrl='https://themified.com/friend-finder/images/users/user-12.jpg'
          userName='Виктор'
          userTextMessage='Привет, как дела, что ты делаешь?'
        />
        <UserMessage
          userAvatarUrl='https://themified.com/friend-finder/images/users/user-1.jpg'
          userName='Сарра'
          userTextMessage='Привет, да норм все, отдыхаю, а ты?'
        />
        <UserMessage
          userAvatarUrl='https://themified.com/friend-finder/images/users/user-12.jpg'
          userName='Виктор'
          userTextMessage='А я сижу и пилю этот сайт...'
        />
        <UserMessage
          userAvatarUrl='https://themified.com/friend-finder/images/users/user-1.jpg'
          userName='Сарра'
          userTextMessage='Понятно.. раскажи как день прошел?'
        />
        <UserMessage
          userAvatarUrl='https://themified.com/friend-finder/images/users/user-12.jpg'
          userName='Виктор'
          userTextMessage='Да ничего нового, целый день пилю блок с сообщениями, оно такое геморное, + еще было несколько заказов и так далее'
        />
        <UserMessage
          userAvatarUrl='https://themified.com/friend-finder/images/users/user-1.jpg'
          userName='Сарра'
          userTextMessage='Понятно.. раскажи как день прошел?'
        />
        <UserMessage
          userAvatarUrl='https://themified.com/friend-finder/images/users/user-12.jpg'
          userName='Виктор'
          userTextMessage='Да ничего нового, целый день пилю блок с сообщениями, оно такое геморное, + еще было несколько заказов и так далее'
        />
      </Body>
      <Footer>
        <input type="text" placeholder='Напишите сообщение'  />
      </Footer>
    </Wrapper> 
  )
}

const UserMessage = (props) => {
  return (
    <UserMessageWrapper>
      <UserAvatar>
        <img src={props.userAvatarUrl} alt="user-avatar" />
      </UserAvatar>
      <UserBody>
        <h6>{props.userName}</h6>
        <p>
          {props.userTextMessage}
        </p>
      </UserBody>
    </UserMessageWrapper>
  )
};


const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(220,220,220);
  border-radius: 4px;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgb(220,220,220);
    bottom: 0;
  }
`;
const LeftBlock = styled(NavLink)`
  display: flex;
  width: 150px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: transparent;
  text-decoration: none;
  & span {
    position: relative;
    color: rgb(129 140 153);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    display: block;
    height: 19px;
    font-size: 14px;
    line-height: 19px;
  }
  &:hover {
    background: linear-gradient(121deg, rgba(220,220,220,0.4) 0%, rgba(22,32,50,0) 100%);
  }
  & span:before,
  & span:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 8px;
    top: 50%;
    left: 50%;
    background: rgb(129 140 153);
  }
  & span:before {
    transform: translate(-36px, 1px) rotate(49deg);
  }
  & span:after {
    transform: translate(-36px, -4px) rotate(-49deg);
  }
`;
const CenterBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & h5 {
    color: #000;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
`;
const RightBlock = styled.div`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 20px;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;


const Body = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  overflow-y: auto;
`;
const UserMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 30px;
  & ${UserAvatar} {
    min-width: 45px;
    min-height: 45px;
    margin: 0px;
  }
  & ${UserAvatar} img {
    width: 100%
  }
`;
const UserBody = styled.div`
  display: flex;
  flex-direction: column;
  justiy-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 5px; 
  & h6 {
    color: #1A639F;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 5px;
  }
  & p {
    color: #000;
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    outline: 0;
    line-height: 18px;
    word-wrap: break-word;
  }
`;

const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgb(220,220,220);
    top: 0;
  }
  & input {
    width: 450px;
    height: 35px;
    padding: 10px 10px;
    border-radius: 8px;
    border: 1px solid rgb(220,220,220);
  }
  & input:focus,
  & input:active {
    border: 1px solid rgb(220,220,220);
    color: rgb(75, 75, 75);
    outline: 0;
    outline-offset: 0;
  }
`;

export default ContainerMessages;