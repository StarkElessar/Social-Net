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
          <MyPosts
            postData={props.content.postData}
            newPostData={props.content.newPostData}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />
          </Route>
          <Route exact path='/profile'>
          <MyPosts
            postData={props.content.postData}
            newPostData={props.content.newPostData}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />
          </Route>
          <Route exact path='/dialogs'>
            <Dialogs dialogItemData={props.content.dialogItemData} />
          </Route>
          <Route exact path='/dialogs/ums01'>
          <ContainerMessages userMessageData={props.messages.userMessageData} />
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