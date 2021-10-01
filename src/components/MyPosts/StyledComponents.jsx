import styled from "styled-components";

export const AddPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  border-bottom: 1px solid rgba(204, 204, 204, 0.4);
  margin-bottom: 20px;

  & form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  & form textarea {
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    height: auto;
    border-radius: 4px;
    color: #939598;
    width: 100%;
    font-family: "Montserrat Alternates", sans-serif;
    outline: 0;
    outline-offset: 0;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 140%;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    resize: vertical;
    margin-right: 10px;
    transition: all ease-in-out 150ms;
  }
  & form i {
    color: #6d6e71;
    font-size: 12px;
    margin: 0 5px;
    cursor: pointer;
    transition: all 150ms ease-in-out 0ms;
  }
  & form i:hover {
    color: #159bca;
  }
  & form button {
    cursor: pointer;
    line-height: 140%;
    text-align: center;
    background: #159bca;
    padding: 10px 10px;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 600;
    margin-left: 10px;
    transition: all 250ms ease-in 0ms;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1),
                0px 0px 10px 0px rgba(0, 0, 0, 0.1),
                0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
  & form button:hover {
    background: #1487b1;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2),
                0px 0px 10px 0px rgba(0, 0, 0, 0.1),
                0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
`;
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
