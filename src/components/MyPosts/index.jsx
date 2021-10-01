import React from "react";
import styled from "styled-components";
import { AddPost, Avatar } from "./StyledComponents";
import FontAwesomeIcon from "./small-components/FontAwesomeIcon";

const MyPosts = (props) => {

  const reversePostData = [...props.postData].reverse();
  console.log(reversePostData);

  const onDeletePost = () => {
    alert('Кнопка работает');
  }

  return (
    <Wrapper>
      <AddPostComponent
        addPost={props.addPost}
        newPostData={props.newPostData}
        updateNewPostText={props.updateNewPostText}
      />
      {
        reversePostData.map(({ id, userAvatarUrl, authorName, postDate, userTextPost }) => (
          <MyPostComponent
            key={id}
            id={id}
            userAvatarUrl={userAvatarUrl}
            authorName={authorName}
            postDate={postDate}
            userTextPost={userTextPost}
            deletePost={onDeletePost}
          />
        ))
      }
    </Wrapper>
    
  )
};

const AddPostComponent = (props) => {
  // const [postText, setPostText] = useState('');
  // const onChangeHandler = (event) => setPostText(event.target.value);
  // onChange = { onChangeHandler }
  // value = { postText }
    
  let newPostElement = React.createRef();

  // Событие при клике на копнку "Опубликовать"
  const onAddPost = (event) => {
    event.preventDefault();
    props.addPost();
  };

  // слушатель события в поле TEXTAREA
  const onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
  }

  return (
    <AddPost>
      <Avatar>
        <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user-avatar" />
      </Avatar>
      <form name="add_post" action="#">
        <textarea
          ref={newPostElement}
          id="userPost"
          name="user_post"
          rows="2"
          cols="30"
          placeholder="Напишите, что вы думаете"
          onChange={onPostChange}
          value={props.newPostData}
        />
        <FontAwesomeIcon nameClass="far fa-edit" />
        <FontAwesomeIcon nameClass="far fa-images" />
        <FontAwesomeIcon nameClass="fas fa-video" />
        <FontAwesomeIcon nameClass="fas fa-map-marked-alt" />
        <button onClick={onAddPost}>Опубликовать</button>
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
      <BtnDelPost onClick={props.deletePost}>
        <SpanDelPost>
          Удалить пост
        </SpanDelPost>
      </BtnDelPost>
    </MyPost>
  )
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MyPost = styled.div`
  position: relative;
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
  margin-bottom: 20px;
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
  justify-content: flex-start;
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
  justify-content: center;
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

const BtnDelPost = styled.button`
  position: absolute;
  height: 16px;
  width: 16px;
  top: 10%;
  right: 3%;
  background: transparent;
  border: none;
  outline: 0;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  transition: all 220ms ease-in 0ms;
  ${MyPost}:hover & {
    opacity: 1;
    visibility: visible;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.2);
    height: 2px;
    width: 10px;
    transition: all 340ms ease-in 0ms;
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover::after,
  &:hover::before {
    background: rgba(0,0,0,0.6);
  }
`;
const SpanDelPost = styled.span`
  position: absolute;
  top: -2px;
  right: 15px;
  line-height: 100%;
  width: 95px;
  text-align: center;
  padding: 4px 8px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: all 240ms ease-in 0ms;
  &:before {
      content: '';
      position: absolute;
      border: 5px solid transparent;
      border-left: 5px solid rgba(0,0,0,0.75);
      top: 5px;
      right: -10px;
    }
  ${BtnDelPost}:hover & {
    right: 20px;
    opacity: 1;
    visibility: visible;
  }
`;


export default MyPosts;