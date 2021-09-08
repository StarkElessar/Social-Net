import React from 'react';
import styled from 'styled-components';
import MyPosts from './../MyPosts';
import Dialogs from './../Messages';
import { Route, Switch } from 'react-router';

const Content = (props) => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path='/'>
          <MyPosts />
        </Route>
        <Route exact path='/profile'>
          <MyPosts />
        </Route>
        <Route exact path='/dialogs'>
          <Dialogs />
        </Route>
      </Switch>
    </Wrapper>
    
  )
};



const Wrapper = styled.section`
  grid-area: main;
  background: rgb(255, 255, 255);
  padding-top: 25px;
  margin: 0px 0px 0px 0px;
`;

export default Content;