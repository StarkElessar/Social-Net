import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import MyPosts from './../MyPosts';
import Dialogs from './../Messages';
import { Route } from 'react-router';

const Content = (props) => {
  return (
      <Wrapper>
        <Route path='' render={() => <MyPosts />} />
        <Route path='/profile' render={() => <MyPosts />} />
        <Route path='/dialogs' render={() => <Dialogs />} />
      </Wrapper>
    
  )
};



const Wrapper = styled.section`
  grid-area: main;
  background: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
`;

export default Content;