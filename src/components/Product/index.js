import React from "react";

import {
  Container,
  ImageProduct,
  DiscountPercent,
  DetailProduct,
  ProductName,
  ProductPrice,
  RegularPrice,
  ActualPrice,
} from "./styles";

import { format } from "../../utils/FormatLink";

import no_image from "../../assets/no_image.png";

export default function Product({
  image,
  name,
  on_sale = false,
  regular_price,
  actual_price,
  discount_percentage,
}) {
  return (
    <Container to={`/product/${format(name, true)}`}>
      <ImageProduct src={image !== "" ? image : no_image} alt={name} />
      {on_sale && <DiscountPercent>-{discount_percentage}</DiscountPercent>}
      <DetailProduct>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          <RegularPrice scratched={on_sale}>{regular_price}</RegularPrice>
          {on_sale && <ActualPrice>{actual_price}</ActualPrice>}
        </ProductPrice>
      </DetailProduct>
    </Container>
  );
}
