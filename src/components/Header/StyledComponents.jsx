import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  background: #231f20;
  z-index: 10;
`;

export const Сontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1070px;
  height: 60px;
  padding: 10px 20px;
  margin: 0 auto;
`;

export const MainLogo = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 135px;
  height: 36px;
  overflow: hidden;
  transition: all 350ms ease-in 0ms;
  text-decoration: none;
}
  & img {
    max-width: 20%;
    transition: all 350ms ease-in 0ms;
    object-fit: cover;
  }
  & span {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    margin-left: 5px;
  }
`;

export const NavigationBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.div`
  position: relative;
  width: 240px;
  height: 28px;
  padding-left: 10px;
  background-color: #4f4c4d;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 30px;
  & img {
    width: 14px;
    height: 14px;
  }
  & form {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato';
  }
  & form input {
    width: 200px;
    background-color: transparent;
    border: none;
    color: #fff;
    padding-left: 8px;
    font-family: 'Montserrat Alternates', sans-serif;
  }
  & form input::placeholder {
    color: #a8a8a8;
    font-family: 'Montserrat Alternates', sans-serif;
  }
  & form input:focus,
  & form input:active {
    border: none;
    color: #fff;
    outline: 0;
    outline-offset: 0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & ul li {
    margin-right: 30px;
    list-style: none;
  }
  & ul li:last-child {
    margin-right: 0;
  }
  & ul li a {
    line-height: 40px;
    text-decoration: none;
    color: #fff;
    font-family: 'Lato';
    transition: all 250ms ease-in 0ms;
  }
  & ul li a:hover {
    color: #2377D5;
  }
`;