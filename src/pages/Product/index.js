import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { Container, ContainerSize } from "./styles";

import Header from "../../components/Header";
import SingleProduct from "../../components/SingleProduct";

import { format } from "../../utils/FormatLink";

function Product({ products }) {
  const [product, setProduct] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const findProduct = () => {
      const productName = format(name, false);

      const [product] = products.filter(
        (product) => product.name === productName
      );

      setProduct(product);
    };

    findProduct();
  }, [name, products]);

  return (
    <Container>
      <Header />
      <ContainerSize>
        
        <SingleProduct {...product} />
      </ContainerSize>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps)(Product);
