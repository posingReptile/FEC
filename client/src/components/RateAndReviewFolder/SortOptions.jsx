import React from 'react';
import { StyledSort } from '../styled/Sort.styled.js';

const SortOptions = ({ setSortBy, totalNumReviews }) => {
  return (
    <StyledSort>
      <h5>{totalNumReviews} reviews, &nbsp;sorted by:</h5>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="relevant">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
    </StyledSort>
  )
}

export default SortOptions;