import styled from "styled-components";

export const Column = styled.section`
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: ${({ isSticky }) => isSticky ? '40px' : '25px'};
  padding-left: 5px;
  position: ${({ isSticky }) => isSticky ? 'fixed' : 'relative'};
  transition: all 350ms ease-in 0ms;
`;
export const Title = styled.h3`
  line-height: 110%;
  color: #3d3d3d;
  margin-bottom: 30px;
  font-size: 18px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 500;
`;
export const RandomFriendItemWrapper = styled.div`
  width: 170px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;
`;
export const RandomFriendAvatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1),
              0px 0px 8px 0px rgba(0, 0, 0, 0.1),
              0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;
export const RandomFriendLinks = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(204, 204, 204, 0.4);
  
  & .name,
  & .follow-link {
    text-decoration: none;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 110%;
    padding-bottom: 5px;
    margin-bottom: 15px;
    color: #1487B1;
    transition: all 350ms ease-in 0ms;
  }
  
  & .follow-link {
    color: #8dc63f;
    margin-bottom: 15px;
  }

  & .name:hover,
  & .follow-link:hover {
    letter-spacing: 0.04rem;
  }
`;