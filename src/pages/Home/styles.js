import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerSize = styled.main`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

export const CountArea = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
`;

export const CountProducts = styled.span`
  margin-left: 5px;
  color: #717171;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const ProductsArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
  width: 100%;
`;
