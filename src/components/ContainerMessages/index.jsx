import React from "react";
import { Wrapper, Header, LeftBlock, CenterBlock, RightBlock, UserAvatar, Body, Footer } from './StyledComponents';
import UserMessageComponent from "./small-components/UserMessageComponent";



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
        {
          props.userMessageData.map(({ userAvatarUrl, userName, userTextMessage, index }) => (
            <UserMessageComponent
              key={index}
              userAvatarUrl={userAvatarUrl}
              userName={userName}
              userTextMessage={userTextMessage}
            />))
        }
      </Body>
      <Footer>
        <input type="text" placeholder='Напишите сообщение'  />
      </Footer>
    </Wrapper> 
  )
}

export default ContainerMessages;