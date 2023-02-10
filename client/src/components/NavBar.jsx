import React, {useEffect, useState} from 'react';
import { StyledHeader, Nav } from './styled/NavBar.styled.js';
import { Container } from './styled/Container.styled.js';
import { FiShoppingCart } from "react-icons/fi"

const NavBar = ({cart}) => {

const [cartSize, setCartSize] = useState("0");

useEffect(() => {
  setCartSize(cart.length);
}, [cart]);

  return (
    <StyledHeader>
      <Container>
        <Nav>
        <h1>Groot<a>-iful</a></h1>
          <p id="shoppingCart"><FiShoppingCart id="cartIcon"/>{cartSize}</p>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default NavBar;