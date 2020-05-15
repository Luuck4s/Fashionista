import styled, { css } from "styled-components";

import { device } from "../../styles/Device";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  margin: 10px auto;
  align-items: center;

  @media ${device.medium} {
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`;

export const ImageArea = styled.figure`
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

export const DiscountPercent = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  background: #212529;
  color: #f8f8f8;
  font-size: 0.95rem;
  padding: 2px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const DetailArea = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.medium} {
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
  transition: all 0.3s;

  :hover {
    background-color: #212529;
    color: #fff;
    border-color: #212529;
  }

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
  transition: transform 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(0.98);
  }

  @media ${device.medium} {
    min-width: 300px;
    max-width: 55%;
  }
`;

export const ErrorSizeNotSelected = styled.span`
  font-size: 0.9rem;
  color: #cf3838;
  margin-top: 10px;
  font-weight: 300;
`;
