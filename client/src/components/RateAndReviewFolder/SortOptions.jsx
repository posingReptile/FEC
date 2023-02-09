import React from 'react';
import './RateAndReview.css';

const SortOptions = ({ setSortBy, totalNumReviews }) => {
  return (
    <div className="sort-styled">
      <h5 className="sort-label">{totalNumReviews} reviews, &nbsp;sorted by:</h5>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="relevant">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  )
}

export default SortOptions;