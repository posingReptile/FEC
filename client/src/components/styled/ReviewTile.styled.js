import styled from 'styled-components';

export const HorizontalImgListTile = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 100%;
  justify-content: flex-start;
`
//change justify-content to center later?

export const StyledImgList = styled.li`
  display: flex;
  flex-direction: row;
  width: 20%;
  position: relative;
  padding: 1%;
`
export const StyledATag = styled.a`
  font-size: 14px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    font-style: italic
  }
`