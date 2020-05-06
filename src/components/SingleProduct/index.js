import React from "react";

import { connect } from "react-redux";

import {
  Container,
  ImageArea,
  DiscountPercent,
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

function SingleProduct({
  image,
  name,
  actual_price,
  on_sale,
  discount_percentage,
  regular_price,
  installments,
  sizes = [],
  addProductCard,
  toggleErrorSize,
  addSelectedSize,
  errorSelected,
  selectedSize,
}) {
  const handleAddProduct = () => {
    if (selectedSize == null) {
      toggleErrorSize(true);
      return;
    }
    toggleErrorSize(false);
    addProductCard(selectedSize);
  };

  const handleSelectedSize = (size) => {
    addSelectedSize(size);
  };

  return (
    <Container>
      <ImageArea>
        {on_sale && <DiscountPercent>-{discount_percentage}</DiscountPercent>}
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
          {errorSelected && (
            <ErrorSizeNotSelected>
              É necessário escolher um tamanho!
            </ErrorSizeNotSelected>
          )}
          <Sizes>
            {sizes.map(
              (size) =>
                size.available && (
                  <Size
                    selected={selectedSize === size.sku ? true : false}
                    onClick={() => handleSelectedSize(size.sku)}
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

const mapStateToProps = (state) => ({
  errorSelected: state.product.errorSelectedSize,
  selectedSize: state.product.selectedSize,
});

export default connect(mapStateToProps)(SingleProduct);
