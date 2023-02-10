import styled from 'styled-components';

export const StyledHeader = styled.header`
padding: 20px 0;
background-color: #556b2f;
color: black;
`
// background-color: #556b2f;

// justify-content: space-between;
export const Nav = styled.nav`
  display: flex;
  align-items: center;

  & > h1 {
    font-size: 40px;
    font-family: 'Roboto Serif', serif;

    & > a {
      font-family: 'Dancing Script', cursive;
      font-weight: 100;
      font-style: normal;
    }
  }
  `
  // font-family: 'Shadows Into Light', cursive;
  // font-family: 'Russo One', sans-serif;
