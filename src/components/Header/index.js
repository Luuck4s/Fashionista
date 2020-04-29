import React from "react";

import {
  Container,
  Nav,
  SectionLogo,
  LinkLogo,
  Logo,
  SectionIcons,
  ButtonSearch,
  ButtonCart,
} from "./styles";

import { FiSearch, FiShoppingBag } from "react-icons/fi";

import fashionista_img from "../../assets/fashionista.png";

export default function Header({counter}) {
  return (
    <Container>
      <Nav>
        <SectionLogo>
          <LinkLogo to={"/"}>
            <Logo src={fashionista_img} alt="Fashionista" />
          </LinkLogo>
        </SectionLogo>
        <SectionIcons>
          <ButtonSearch>
            <FiSearch size={20} />
          </ButtonSearch>
          <ButtonCart quantityItems={counter}>
            <FiShoppingBag size={20} />
          </ButtonCart>
        </SectionIcons>
      </Nav>
    </Container>
  );
}
