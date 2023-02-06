import React, {useEffect, useState} from 'react';
import { StyledHeader, Nav } from './styled/NavBar.styled.js';
import { Container } from './styled/Container.styled.js';
import { GiBirchTrees } from 'react-icons/gi'
import { FiShoppingCart } from "react-icons/fi"
{/* <GiBirchTrees style={{height: '40px'}}/> */}
const NavBar = ({cart}) => {

const [cartSize, setCartSize] = useState("68");

useEffect(() => {
  setCartSize(cart.length);
  console.log('from cart', cart);
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