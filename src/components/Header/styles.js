import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 55px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

export const SectionLogo = styled.section`
  display: flex;
`;

export const LinkLogo = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img.attrs({
  resizeMode: "contain",
})`
  height: 1.2rem;
`;

export const SectionIcons = styled.section`
  display: flex;
  align-items: center;
`;

export const ButtonSearch = styled.button`
  border: none;
  background: transparent;
  outline: 0px;
`;

export const ButtonCart = styled.button`
  border: none;
  background: transparent;
  outline: 0px;
  position: relative;
  padding: 10px;

  ${(props) =>
    props.quantityItems &&
    css`
  
  ::after{
    content: '${(props) => props.quantityItems}';
    font-size: 0.7rem;
    font-weight: bold;
    color: #FFF;
    background: #E83B07;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 0;
  }`}
`;
