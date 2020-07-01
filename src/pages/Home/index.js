import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import { connect, useDispatch } from "react-redux";
import { setInitialProducts } from "../../store/actions/products";

import {
  clearProductStore,
  setProductActived,
} from "../../store/actions/product";

import Header from "../../components/Header";
import Product from "../../components/Product";
import Cart from "../../components/Cart";
import Search from "../../components/Search";

import { format } from "../../utils/FormatLink";
import { v4 as uuidv4 } from "uuid";

import {
  Container,
  ContainerSize,
  CountArea,
  CountProducts,
  ProductsArea,
} from "./styles";

function Home({ products }) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/db");
      dispatch(setInitialProducts(response.data));
    };

    getData();
  }, [dispatch]);

  const handleClickProduct = (product) => {
    dispatch(setProductActived(product));
    history.push(`/product/${format(product.name, true)}`);
  };

  return (
    <Container onLoad={() => dispatch(clearProductStore())}>
      <Header />
      <ContainerSize>
        <CountArea>
          <CountProducts>{products.length} peças</CountProducts>
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
      <Cart />
      <Search />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps)(Home);
