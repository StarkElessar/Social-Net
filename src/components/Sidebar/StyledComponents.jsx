import styled from "styled-components";
// position: sticky;
// top: 105px;
// margin - top: 40px;
export const UserBlock = styled.div`
  
  position: ${({ isSticky }) => isSticky ? 'fixed' : 'relative'};
  top: ${({ isSticky }) => isSticky ? '100px' : '0px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Lato', sans-serif;
  line-height: 26px;
  color: #6d6e71;
  font-size: 13px;

`;
export const UserBlockTitle = styled.div`
  background: #8dc63f;
  padding: 2px 20px;
  width: 170px;
  height: 30px;
  border-radius: 15px;
  margin: 0 auto 20px;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 600;
`;
export const ListUsers = styled.ul`
  padding-left: 20px;
  width: 240px;
  padding-right: 20px;
  text-align: center;
  margin: 0;
  list-style: none;

  & li {
  display: inline-block;
  position: relative;
  margin: 3px auto !important;
  padding-left: 2px;
  padding-right: 2px;
  }
`;
export const UserAvatarImg = styled.img`
  display: block;
  height: 58px;
  width: 58px;
  max-width: 100%;
  border-radius: 50%;
  vertical-align: middle;
`;
export const OnlineDot = styled.span`
  background: linear-gradient(to bottom, rgba(141,198,63, 1), rgba(0,148,68, 1));
  border: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  bottom: -6px;
  border: 2px solid #fff;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Column = styled.section`
  position: static;
  padding-top: 25px;
  grid-area: nav;
  background: #fff;
`;
export const ProfCard = styled.div`
  background: linear-gradient(to bottom, rgba(39,170,225,.8), rgba(28,117,188,.8)), url('https://themified.com/friend-finder/images/covers/1.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 90px;
  border-radius: 4px;
  padding: 10px 20px;
  color: #fff;
  margin-bottom: 10px;
`;
export const ImgAvatar = styled.img`
  border: 7px solid #fff;
  float: left;
  margin-right: 20px;
  position: relative;
  top: -30px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;
export const LinkName = styled.a`
  font-size: 15px;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-decoration: none;
  line-height: 110%;
  margin: 0 0 10px 0;
  transition: all 350ms ease-in 0ms;

  &:hover {
    border-bottom: 1px solid;
  }
`;
export const LinkFollowers = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-decoration: none;
  margin-top: 10px;
  transition: all 350ms ease-in 0ms;
  & i {
    padding-top: 2px;
    margin-right: 5px;
  }
`;

export const MenuNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 160px; 
  }
  & ul li:last-child {
    margin-top: 0px;
    padding-bottom: 15px;
  }
  & ul li a {
    color: #6d6e71;
    text-decoration: none;
    font-size: 24px;
    text-align: center;
    transition: all 150ms ease-in 0ms;
  }
  & ul li a:hover {
    color: rgb(26, 132, 165);
    letter-spacing: 1px;
  }
  & ul li a.active {
    color: rgb(26, 132, 165);
    letter-spacing: 1px;
  }
`;