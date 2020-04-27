import React from "react";

import {
  Container,
  ImageProduct,
  DetailProduct,
  ProductName,
  ProductPrice,
} from "./styles";

import no_image from '../../assets/no_image.png';

export default function Product({ imgLink = no_image, name, price }) {
  const formartLink = (name) => {
    const link = name.toLowerCase().replace(/\W/g, "-");

    return link;
  };

  return (
    <Container to={`/product/${formartLink(name)}`}>
      <ImageProduct src={no_image} />
      <DetailProduct>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </DetailProduct>
    </Container>
  );
}
