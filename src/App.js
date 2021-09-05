import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components'
import MainHeader from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import RandomFriend from './RandomFriend';

const App = (props) => {
  return (
    <BrowserRouter>
      <AppWrapper>
          <MainHeader />
        <AppContainer>

          <Sidebar />
          <Content />
          <RandomFriend />
          
        </AppContainer>
      </AppWrapper>
    </BrowserRouter>
    
  );
}

const AppWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  color: #fff;
  width: 100%;
  height: 100vh;
`;
const AppContainer = styled.div`
  width: 1030px;
  margin: 85px auto 0;
  display: grid;
  grid-template-areas: "nav main random";
  grid-template-rows: 100%;
  grid-template-columns: 240px 10fr 180px;
  grid-gap: 15px;
`;

export default App;
