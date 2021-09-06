import React from "react";
import { ProfCard, ImgAvatar, LinkName, LinkFollowers } from "./../StyledComponents";

const ProfileCard = (props) => {
  return (
    <ProfCard>
      <ImgAvatar src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="avatar-author" />
      <LinkName href="https://google.com">Sarah Cruiz</LinkName>
      <LinkFollowers><i className="far fa-plus-square"></i> 1,299 followers</LinkFollowers>
    </ProfCard>
  )
};

export default ProfileCard;