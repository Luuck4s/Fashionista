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

export const SearchHeader = styled.div`
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

export const TitleSearch = styled.h4`
  text-align: center;
  margin: 0 auto;
  color: #212529;
  font-size: 0.95rem;
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 15px;
  width: 100%;
  background: #f6f6f6;
`;

export const SearchInput = styled.input`
  background: #fff;
  border-radius: 4px;
  border: none;
  color: #212529;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  padding: 12px;
  outline: none;
`;

export const SearchContent = styled.div`
  background: #f8f8f8;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 10rem;
`;

export const AreaAnimation = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
