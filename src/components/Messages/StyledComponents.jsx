import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

export const UserDialogItems = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid rgb(220,220,220);
  border-radius: 4px;
  overflow-y: auto;
  height: 550px;
  ::-webkit-scrollbar { width: 4px;}
  ::-webkit-scrollbar-button {  none; }
  ::-webkit-scrollbar-track {  background-color: #999;}
  ::-webkit-scrollbar-track-piece { background-color: #ffffff;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
  ::-webkit-scrollbar-corner { background-color: #999;}}
  ::-webkit-resizer { background-color: #666;}
`;
export const UserDialogItem = styled(NavLink)`
  position: relative;
  display: flex;
  width: 100%;
  text-decoration: none;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 150ms ease 0ms;
  &:hover {
    background: rgb(245, 245, 245);
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 470px;
    height: 0.5px;
    background: rgb(220,220,220);
    transition: all 350ms ease 0ms;
  }
  &:before {
    bottom: 0;
  }
  &:after {
    top: 0;
  }
  &:first-child:after {
    height: 0px;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
  }
  a & {
    width: 100%;
  }
`;
export const UserName = styled.h6`
  color: #333;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  margin-left: 20px
`;
export const BtnDel = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 16px;
  height: 16px;
  opacity: 0;
  display: none;
  border: none;
  transition: all 200ms ease-in 0ms;
  background: transparent;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 12px;
    height: 2px;
    background: rgb(200,200,200);
    transition: all 150ms ease-in 0ms;
  }
  &:before {
    transform: translate(-50%,-50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%,-50%) rotate(-45deg);
  }
  ${UserDialogItem}:hover & {
    opacity: 1;
    display: block;
  }
  ${UserDialogItem} &:hover:before,
  ${UserDialogItem} &:hover:after {
    background: rgb(120,120,120);
  }
`;
export const TextDelDialog = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background: rgba(0,0,0,0.8);
  width: 85px;
  height: 22px;
  border-radius: 4px;
  top: 50px;
  right: -4px;
  opacity: 0;
  visibility: hidden;
  transition: all 50ms ease-in-out 0ms;
  &:before {
    content: '';
    position: absolute;
    border: 5px solid transparent;
    border-bottom: 5px solid rgba(0,0,0,0.8);
    top: -10px;
    right: 7px;
  }
  & span {
    position: relative;
    color: #fff;
    font-size: 12px;
    font-family: 'Montserrat';
  }
  ${BtnDel}:hover & {
    top: 25px;
    right: -4px;
    opacity: 1;
    visibility: visible;
  }
`;