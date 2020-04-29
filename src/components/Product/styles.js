import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: calc(100% / 1);
  min-height: 300px;
  margin: 0px 0px 20px 10px;

  @media (min-width: 525px) {
    width: calc((100% / 2) - 10px);
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

export const ProductPrice = styled.span`
  font-size: 0.9rem;
  color: #212529;
`;
