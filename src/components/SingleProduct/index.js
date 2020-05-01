import React, { useState } from "react";

import {
  Container,
  ImageArea,
  Image,
  DetailArea,
  NameProduct,
  PriceProduct,
  RegularPrice,
  ActualPrice,
  Payment,
  SizesProduct,
  ErrorSizeNotSelected,
  Sizes,
  SizesText,
  Size,
  ButtonAddCart,
} from "./styles";

import no_image from "../../assets/no_image.png";

export default function SingleProduct({
  image,
  name,
  actual_price,
  on_sale,
  regular_price,
  installments,
  sizes = [],
  addProductCard
}) {
  const [sizeSelected, setSizeSelected] = useState("");
  const [sizeNotSelected, setSizeNotSelected] = useState(false);

  const handleAddProduct = () => {
    if (!sizeSelected) {
      setSizeNotSelected(true);
      return;
    }

    setSizeNotSelected(false);
    addProductCard(sizeSelected)
  };

  return (
    <Container>
      <ImageArea>
        <Image src={image !== "" ? image : no_image} alt={name} />
      </ImageArea>
      <DetailArea>
        <NameProduct>{name}</NameProduct>
        <PriceProduct>
          <RegularPrice scratched={on_sale}>{regular_price}</RegularPrice>
          {on_sale && <ActualPrice>{actual_price}</ActualPrice>}
          <Payment>em até {installments}</Payment>
        </PriceProduct>
        <SizesProduct>
          <SizesText>Escolha o tamanho</SizesText>
          {sizeNotSelected && (
            <ErrorSizeNotSelected>
              É necessário escolher um tamanho!
            </ErrorSizeNotSelected>
          )}
          <Sizes>
            {sizes.map(
              (size) =>
                size.available && (
                  <Size
                    selected={sizeSelected === size.sku ? true : false}
                    onClick={() => setSizeSelected(size.sku)}
                    key={size.sku}
                  >
                    {size.size}
                  </Size>
                )
            )}
          </Sizes>
        </SizesProduct>
        <ButtonAddCart onClick={handleAddProduct}>
          Adicionar à Sacola
        </ButtonAddCart>
      </DetailArea>
    </Container>
  );
}
