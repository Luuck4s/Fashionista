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

function SearchProduct({
  image,
  name,
  actual_price,
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
        <ActualPrice>{actual_price}</ActualPrice>
        <Payment>{installments}</Payment>
      </ProductPrice>
    </Container>
  );
}

export default SearchProduct;
