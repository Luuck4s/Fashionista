import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px 10px;
`;

export const ProductInformation = styled.div`
  display: flex;
  width: 100%;
`;

export const ImageArea = styled.figure`
  width: 70%;
`;

export const ImageProduct = styled.img`
  width: 100%;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductName = styled.h4`
  font-size: 0.9rem;
  color: #212529;
  font-weight: 600;
  margin: 0px 0px 5px 10px;
`;

export const ProductSize = styled.span`
  font-size: 0.8rem;
  color: #717171;
  margin: 5px 0px 0px 10px;
`;

export const ProductQuantity = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80px;
  margin: 15px 0px 0px 10px;
`;

export const ButtonQuantity = styled.button`
  background: transparent;
  border: 1px solid #212529;
  outline: none;
  display: flex;
  padding: 2px;
  transition: background 0.2s ease-in-out;

  :hover{
    background: #212529;
    color: #fff;
  }
`;

export const Quantity = styled.span`
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
`;

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const ActualPrice = styled.strong`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Payment = styled.span`
  font-size: 0.9rem;
  color: #a7a7a7;
`;

export const ButtonRemoveItem = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.89rem;
  color: #d72828;
`;
