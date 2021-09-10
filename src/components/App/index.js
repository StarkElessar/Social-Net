import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import RandomFriendSection from '../RandomFriendSection';

const App = (props) => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Main>
          <Sidebar sidebar={props.state.sidebar} />
          <Content content={props.state.content} messages={props.state.messages} />
          <RandomFriendSection randomFriendsSection={props.state.randomFriendsSection} />
        </Main>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  padding: 0px 0px 0px 0px;
  color: #fff;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  width: 1030px;
  margin: 60px auto 0;
  display: grid;
  grid-template-areas: "nav main random";
  grid-template-rows: 100%;
  grid-template-columns: 240px 10fr 180px;
  grid-gap: 15px;
`;

export default App;
