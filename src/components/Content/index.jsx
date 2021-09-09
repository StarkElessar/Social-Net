import React from 'react';
import styled from 'styled-components';
import MyPosts from './../MyPosts';
import Dialogs from './../Messages';
import ContainerMessages from './../ContainerMessages';
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
          <Route exact path='/dialogs/ums01'>
            <ContainerMessages />
          </Route>
        </Switch>
    </Wrapper>
  )
};



const Wrapper = styled.section`
  grid-area: main;
  height: 100%;
  background: rgb(255, 255, 255);
  margin-top: 25px;
  padding: 0px;
  height: 550px;
  width: 100%;
`;

export default Content;