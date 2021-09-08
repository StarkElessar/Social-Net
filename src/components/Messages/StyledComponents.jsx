import styled from "styled-components";

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1),
              0px 0px 10px 0px rgba(0, 0, 0, 0.1),
              0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  & img {
    width: 100%;
    object-fit: cover;
  }
`;
