import React from "react";
import styled from "styled-components";
import { AddPost, Avatar } from "./StyledComponents";
import FontAwesomeIcon from "./small-components/FontAwesomeIcon";

const MyPosts = (props) => {
  return (
    <Wrapper>
      <AddPostComponent />
      <MyPostComponent
        userAvatarUrl='https://themified.com/friend-finder/images/users/user-1.jpg'
        authorName='Сарра Круиз'
        postDate='2 октября в 11:10'
        userTextPost='Тестим камеру нового Xiaomi redmi Note 3 Pro ✌📷
                      Скажу одно, соотношение качества всех внутренностей, мощности процессора, камеры и автономности по отношению к бюджету💰 самого аппарата - нереальны! Но даже и эти сравнения не сопоставимы с красотою Вички 😌'
      />
      <MyPostComponent
        userAvatarUrl='https://themified.com/friend-finder/images/users/user-1.jpg'
        authorName='Сарра Круиз'
        postDate='3 октября в 13:30'
        userTextPost='Именно поэтому мы и работаем в SketchUp.
                      Смотрите запись мастер-класса по моделированию мягкого кресла и сложного светильника.
                      ⚠Предупреждаем! Возможна реакцкия " А что так можно было?!"⚠
                      SketchUp - это просто и быстро. Возможности не ограничены, это лишь только кажется. Проще, удобнее, логичнее. Крутой конечный результат.
                      Смотрите, удивляйтесь, наслаждайтесь!'
      />
      <MyPostComponent
        userAvatarUrl='https://themified.com/friend-finder/images/users/user-1.jpg'
        authorName='Сарра Круиз'
        postDate='12 октября в 10:30'
        userTextPost='На днях пересмотрел Хоббит и Властелин Колец, и как бы хотелось продолжения этой выдуманной вселенной 😥'
      />
      
    </Wrapper>
    
  )
};

const AddPostComponent = (props) => {
  return (
    <AddPost>
      <Avatar>
        <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user-avatar" />
      </Avatar>
      <form name="add_post" action="#">
        <textarea id="userPost" name="user_post" rows="2" cols="30" placeholder="Напишите, что вы думаете"></textarea>
        <FontAwesomeIcon nameClass="far fa-edit" />
        <FontAwesomeIcon nameClass="far fa-images" />
        <FontAwesomeIcon nameClass="fas fa-video" />
        <FontAwesomeIcon nameClass="fas fa-map-marked-alt" />
        <button>Опубликовать</button>
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