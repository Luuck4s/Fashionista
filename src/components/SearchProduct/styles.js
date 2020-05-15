import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 10px 20px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.3s;

  :hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
`;

export const ImageArea = styled.figure`
  width: 25%;
  min-width: 90px;
`;

export const ImageProduct = styled.img`
  width: 100%;
`;

export const ProductDetail = styled.div`
  align-items: flex-start;
  margin: 0px auto 0px 10px;
`;

export const ProductName = styled.p`
  color: #212529;
  font-weight: bold;
  font-size: 0.8rem;
`;

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  min-width: 80px;
`;

export const ActualPrice = styled.strong`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #212529;
`;

export const Payment = styled.span`
  font-size: 0.85rem;
  color: #a7a7a7;
`;
