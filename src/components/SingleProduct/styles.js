import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  margin: 10px auto;
  align-items: center;

  @media (min-width: 800px) {
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`;

export const ImageArea = styled.figure`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 800px) {
    width: auto;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media (min-width: 800px) {
    width: auto;
  }
`;

export const DetailArea = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 800px) {
    margin-left: 10px;
  }
`;

export const NameProduct = styled.h1`
  font-size: 1.29rem;
  margin-bottom: 0.8rem;
  color: #212529;
`;

export const PriceProduct = styled.section`
  display: flex;
  align-items: center;
`;

export const RegularPrice = styled.span`
  font-size: 1.01rem;
  color: #212529;
  font-weight: bold;
  margin-right: 10px;

  ${(props) =>
    props.scratched &&
    css`
      font-size: 1rem;
      font-weight: normal;
      color: #a7a7a7;
      text-decoration: line-through;
    `}
`;

export const ActualPrice = styled.span`
  font-size: 1.01rem;
  color: #212529;
  margin-right: 10px;
  font-weight: bold;
`;

export const Payment = styled.strong`
  font-size: 0.9;
  color: #a7a7a7;
`;

export const SizesProduct = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SizesText = styled.span`
  margin-top: 10px;
  color: #a7a7a7;
  font-size: 0.9rem;
`;

export const Sizes = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Size = styled.div`
  margin-right: 10px;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  transition: background 0.3s;

  ${(props) =>
    props.selected &&
    css`
      background-color: #212529;
      color: #fff;
      border-color: #212529;
    `}
`;

export const ButtonAddCart = styled.button`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  background-color: #212529;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0.9rem;
  text-align: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
  transition: transform .3s;
  cursor: pointer;


  @media (min-width: 800px) {
    min-width: 300px;
    max-width: 55%;
  }

  :hover{
    transform: scale(0.98);
  }
`;
