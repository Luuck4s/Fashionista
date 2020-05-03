import styled, { css } from "styled-components";

export const Container = styled.section`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: calc((100% / 1) - 15px);
  margin: 10px auto;
  min-height: 300px;
  position: relative;
  cursor: pointer;

  @media (min-width: 525px) {
    width: calc((100% / 2) - 10px);
    margin-right: 7.5px;
    margin-left: 0px;
  }

  @media (min-width: 800px) {
    width: calc((100% / 3) - 10px);
  }

  @media (min-width: 1100px) {
    width: calc((100% / 4) - 10px);
  }
`;

export const ImageProduct = styled.img`
  width: 100%;
  min-height: 300px;
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
  color: #F8F8F8;
  font-size: 0.75rem;
  padding: 2px;
`

export const DetailProduct = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: 0.9rem;
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
      color: #a7a7a7;
      text-decoration: line-through;
      margin-right: 10px;
    `}
`;

export const ActualPrice = styled.span`
  font-size: 0.9rem;
  color: #212529;
`;
