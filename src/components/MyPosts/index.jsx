import React from "react";
import styled from "styled-components";
import { AddPost, Avatar } from "./StyledComponents";
import FontAwesomeIcon from "./small-components/FontAwesomeIcon";



const MyPosts = (props) => {
  return (
    <Wrapper>
      <AddPostComponent />
      {
        props.postData.map(({ id, userAvatarUrl, authorName, postDate, userTextPost }) => (
          <MyPostComponent
            id={id}
            userAvatarUrl={userAvatarUrl}
            authorName={authorName}
            postDate={postDate}
            userTextPost={userTextPost}
          />
        ))
      }
    </Wrapper>
    
  )
};


const AddPostComponent = (props) => {

  const newPostElement = React.createRef();

  const addPost = () => {
    let textBox = newPostElement.current.value;
    alert(textBox);
  };

  return (
    <AddPost>
      <Avatar>
        <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user-avatar" />
      </Avatar>
      <form name="add_post" action="#">
        <textarea ref={newPostElement} id="userPost" name="user_post" rows="2" cols="30" placeholder="Напишите, что вы думаете"></textarea>
        <FontAwesomeIcon nameClass="far fa-edit" />
        <FontAwesomeIcon nameClass="far fa-images" />
        <FontAwesomeIcon nameClass="fas fa-video" />
        <FontAwesomeIcon nameClass="fas fa-map-marked-alt" />
        <button onClick={addPost}>Опубликовать</button>
      </form>
    </AddPost>
  )
};


const MyPostComponent = (props) => {
  return (
    <MyPost>
      <PostHeader>
        <Avatar>
          <img src={props.userAvatarUrl} alt="user-avatar" />
        </Avatar>
        <UserName>
          <h5>{ props.authorName }</h5>
          <span>{props.postDate}</span>
        </UserName>
      </PostHeader>
      <PostBody>
        <p>{ props.userTextPost}</p>
      </PostBody>
    </MyPost>
  )
};



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MyPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 15px 20px;
  background: rgb(250,250,250);
  border: 1px solid rgba(204, 204, 204, 0.2);
  border-radius: 6px;
  margin-top: 20px;
  transition: all 250ms ease-in 0ms;
  &:hover {
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.1),
                0 0 5px 0 rgba(0,0,0,0.1),
                0 0 8px 0 rgba(0,0,0,0.1);
  }
`;
const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content; center;
  align-items: center;
  height: 60px;
  width: 100%;
`;
const UserName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & h5 {
    color: rgb(42 88 133);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    margin-bottom: 5px;
  }
  & span {
    line-height: 14px;
    font-size: 13px;
    font-weight: 400;
    color: rgb(98 109 122);
  }
`;
const PostBody = styled.div`
  display: flex;
  justify-content; center;
  align-items: center;
  margin-top: 15px;
  & p {
    font-size: 13px;
    color: #000;
    font-weight: 400;
    line-height: 160%;
    overflow: hidden;
    word-wrap: break-word;
    text-align: left;
  }
`;



export default MyPosts;