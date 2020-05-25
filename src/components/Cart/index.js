import React from "react";
import { Lottie } from "@crello/react-lottie";

import { v4 as uuidv4 } from "uuid";

import { connect, useDispatch } from "react-redux";

import {
  removeProductToCart,
  addProductToCart,
  toggleCartVisible,
} from "../../store/actions/cart";

import CartProduct from "../CartProduct";

import { groupProducts, sumProducts } from "../../utils/Products";

import { AiOutlineClose } from "react-icons/ai";

import {
  Container,
  CartHeader,
  CartContent,
  TitleCart,
  ButtonBack,
  TotalCart,
  TotalText,
  EmptyCartContainer,
} from "./styles";

import lottieEmptyCart from "../../assets/lottie_empty_cart.json";

function Cart({ visible = false, cartItems = [], count }) {
  const dispatch = useDispatch();

  const RemoveOneProduct = (product) => {
    const productToRemove = { ...product };

    const indexProduct = cartItems.findIndex((item) => {
      return (
        item.name === productToRemove.name &&
        item.selectedSize === productToRemove.selectedSize
      );
    });

    const newItemsCart = cartItems.filter(
      (_item, index) => index !== indexProduct
    );

    dispatch(removeProductToCart(newItemsCart));
  };

  const RemoveProduct = (product) => {
    const newItemsCart = cartItems.filter(
      (item) => item.selectedSize !== product.selectedSize
    );

    dispatch(removeProductToCart(newItemsCart));
  };

  const AddProduct = (product) => {
    delete product.quantity;

    dispatch(addProductToCart(product));
  };

  const handleHiddenCart = () => {
    dispatch(toggleCartVisible());
  };

  return (
    <Container active={visible}>
      <CartHeader>
        <ButtonBack onClick={handleHiddenCart} className="button-back">
          <AiOutlineClose size={20} color={"#212529"} />
        </ButtonBack>
        <TitleCart>Sacola ({count})</TitleCart>
      </CartHeader>
      <CartContent>
        {cartItems.length === 0 && (
          <EmptyCartContainer>
            <Lottie
              config={{
                animationData: lottieEmptyCart,
                loop: true,
                autoplay: true,
              }}
            />
          </EmptyCartContainer>
        )}
        {cartItems.reduce(groupProducts, []).map((product) => (
          <CartProduct
            key={uuidv4()}
            RemoveOneProduct={() => RemoveOneProduct(product)}
            AddProduct={() => AddProduct(product)}
            RemoveProduct={() => RemoveProduct(product)}
            {...product}
          />
        ))}
      </CartContent>
      <TotalCart>
        <TotalText>Subtotal - {sumProducts(cartItems)} </TotalText>
      </TotalCart>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  count: state.cart.count,
  visible: state.cart.visible,
});

export default connect(mapStateToProps)(Cart);
