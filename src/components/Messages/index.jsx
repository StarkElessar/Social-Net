import React from "react";
import styled from "styled-components";
import { Avatar } from "./StyledComponents";

const Dialogs = (props) => {
  return (
    <UserDialogItems>
      <UserDialogItem>
        <Avatar>
          <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user-avatar" />
        </Avatar>
        <UserName>

        </UserName>
      </UserDialogItem>
      
    </UserDialogItems>
  )
};

const UserDialogItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const UserDialogItem = styled.div`

`;
const UserName = styled.div`

`;


export default Dialogs;