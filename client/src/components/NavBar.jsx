import React from 'react';
import { StyledHeader, Nav } from './styled/NavBar.styled.js';
import { Container } from './styled/Container.styled.js';
import { GiBirchTrees } from 'react-icons/gi'
{/* <GiBirchTrees style={{height: '40px'}}/> */}
const NavBar = () => {

  return (
    <StyledHeader>
      <Container>
        <Nav>
        <h1>Groot<a>-iful</a></h1>
        </Nav>
      </Container>
    </StyledHeader>

  )


}

export default NavBar;