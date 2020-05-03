import styled, { css } from "styled-components";

import { device } from "../../styles/Device";

export const Container = styled.section`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: calc((100% / 1) - 10px);
  margin: 10px auto;
  position: relative;
  cursor: pointer;

  @media ${device.small} {
    width: calc((100% / 2) - 10px);
    margin-right: 7.5px;
    margin-left: 0px;
  }

  @media ${device.medium} {
    width: calc((100% / 3) - 10px);
  }

  @media ${device.large} {
    width: calc((100% / 4) - 10px);
  }
`;

export const ImageProduct = styled.img`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export const DiscountPercent = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  background: #212529;
  color: #f8f8f8;
  font-size: 0.75rem;
  padding: 2px;
`;

export const DetailProduct = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: 0.9rem;
  text-align: center;
  color: #212529;
  margin: 10px 0px 5px 0px;
`;

export const ProductPrice = styled.div`
  display: flex;
`;

export const RegularPrice = styled.span`
  font-size: 0.9rem;
  color: #212529;

  ${(props) =>
    props.scratched &&
    css`
      font-size: 0.8rem;
      color: #717171;
      text-decoration: line-through;
      margin-right: 10px;
    `}
`;

export const ActualPrice = styled.span`
  font-size: 0.9rem;
  color: #212529;
`;
