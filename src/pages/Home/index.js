import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import { connect, useDispatch } from "react-redux";
import { setInitialProducts } from "../../store/actions/products";
import { toggleCartVisible } from "../../store/actions/cart";
import {
  clearProductStore,
  setProductActived,
} from "../../store/actions/product";

import Header from "../../components/Header";
import Product from "../../components/Product";
import Cart from "../../components/Cart";

import { format } from "../../utils/FormatLink";
import { v4 as uuidv4 } from "uuid";

import {
  Container,
  ContainerSize,
  CountArea,
  CountProducts,
  ProductsArea,
} from "./styles";

function Home({ products, showCart }) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/catalog");
      dispatch(setInitialProducts(response.data));
    };

    getData();
  }, [dispatch]);

  const handleClickCart = () => {
    dispatch(toggleCartVisible());
  };

  const handleClickProduct = (product) => {
    dispatch(setProductActived(product));
    history.push(`/product/${format(product.name, true)}`);
  };

  return (
    <Container onLoad={() => dispatch(clearProductStore())}>
      <Header handleClickCart={handleClickCart} />
      <ContainerSize>
        <CountArea>
          <CountProducts>{products.length} Items</CountProducts>
        </CountArea>
        <ProductsArea>
          {products.map((product) => (
            <Product
              handleClickProduct={() => handleClickProduct(product)}
              key={uuidv4()}
              {...product}
            />
          ))}
        </ProductsArea>
      </ContainerSize>
      <Cart visible={showCart} handleHiddenCart={handleClickCart} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.data,
  showCart: state.cart.visible,
});

export default connect(mapStateToProps)(Home);
