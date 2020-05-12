import styled, { css } from "styled-components";
import { device } from "../../styles/Device";

export const Container = styled.section`
  background: #fff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -200vh;
  z-index: 2;
  transition: right 0.3s ease-in-out;
  backface-visibility: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.22);
  
  ${(props) =>
    props.active &&
    css`
      right: 0;

      ::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        transition: background 0.8s ease-in-out;
        z-index: -1;
      }
    `}


  @media ${device.medium} {
    width: 400px;
  }

`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  height: 55px;
  background: #fff;
`;

export const ButtonBack = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

export const TitleCart = styled.h4`
  text-align: center;
  margin: 0 auto;
  color: #212529;
  font-size: 0.95rem;
`;

export const CartContent = styled.div`
  background: #f8f8f8;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  padding-bottom: 70px;
  overflow-y: auto;
`;

export const TotalCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: #212529;
  width: 100vw;
  height: 50px;
  padding: 14px 25px;

  @media ${device.medium} {
    justify-content: flex-start;
  }
`;

export const TotalText = styled.p`
  font-size: 0.95rem;
  color: #f8f8f8;
  font-weight: bold;
`;
