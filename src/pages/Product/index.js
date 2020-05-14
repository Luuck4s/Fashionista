import React from "react";

import { connect, useDispatch } from "react-redux";
import { addProductToCart } from "../../store/actions/cart";
import {
  setSelectedSize,
  toggleErrorSelectedSize,
} from "../../store/actions/product";
import Header from "../../components/Header";
import SingleProduct from "../../components/SingleProduct";
import Cart from "../../components/Cart";

import { Container, ContainerSize } from "./styles";

function Product({ product }) {
  const dispatch = useDispatch();

  const addProductCart = (sizeProduct) => {
    const productToCart = {
      ...product,
      selectedSize: sizeProduct,
    };

    dispatch(addProductToCart(productToCart));
  };

  const toggleErrorSize = (hasError) => {
    dispatch(toggleErrorSelectedSize(hasError));
  };

  const addSelectedSize = (size) => {
    dispatch(setSelectedSize(size));
  };

  return (
    <Container>
      <Header />
      <ContainerSize>
        <SingleProduct
          addProductCard={addProductCart}
          toggleErrorSize={toggleErrorSize}
          addSelectedSize={addSelectedSize}
          {...product}
        />
      </ContainerSize>
      <Cart />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  product: state.product.product,
});

export default connect(mapStateToProps)(Product);
