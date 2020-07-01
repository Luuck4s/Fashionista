import React from "react";

import {
  Container,
  ImageArea,
  ImageProduct,
  ProductDetail,
  ProductName,
  ProductPrice,
  ActualPrice,
  Payment,
} from "./styles";

import no_image from "../../assets/no_image.png";

import { installments as FuncInstallments } from "../../utils/Installments";

function SearchProduct({
  image,
  name,
  regular_price,
  installments,
  handleClickProduct,
}) {
  return (
    <Container onClick={handleClickProduct}>
      <ImageArea>
        <ImageProduct src={image !== "" ? image : no_image} alt={name} />
      </ImageArea>
      <ProductDetail>
        <ProductName>{name}</ProductName>
      </ProductDetail>
      <ProductPrice>
        <ActualPrice>{regular_price}</ActualPrice>
        <Payment>{FuncInstallments(regular_price)}</Payment>
      </ProductPrice>
    </Container>
  );
}

export default SearchProduct;
