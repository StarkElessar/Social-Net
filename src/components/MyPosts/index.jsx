import React from "react";
import styled from "styled-components";
import { AddPost, Avatar } from "./StyledComponents";
import FontAwesomeIcon from "./small-components/FontAwesomeIcon";

const MyPosts = (props) => {
  return (
    <Wrapper>
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
    </Wrapper>
    
  )
};

const Wrapper = styled.div`
  display: flex;
`;


export default MyPosts;