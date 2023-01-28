import React from 'react';
import StarBar from './StarBar.jsx'

const RatingBreakdown = (props) => {


  return (
    <div data-testid='rating-breakdown'>
      <h3>Rating Breakdown</h3>
      <div data-testid='rating-bd-sum'>
        <h5>Rating Summary</h5>
        <h5>{/*Placeholder for product avg rating*/}4.5</h5>
        <h5>{/*Placeholder for stars*/}stars</h5>
      </div>
      <div data-testid='rating-bd-rec'>
        <p>% of reviewers recommend this product</p>
      </div>
      <div data-testid='rating-bd-stars'>
        <a>5 Stars</a> <StarBar starRating={40} height={15}/><br/>
        <a>4 Stars</a> <StarBar starRating={30} height={15}/> <br/>
        <a>3 Stars</a> <StarBar starRating={15} height={15}/> <br/>
        <a>2 Stars</a> <StarBar starRating={15} height={15}/> <br/>
        <a>1 Stars</a> <StarBar starRating={10} height={15}/> <br/>
      </div>
    </div>
  )
}

export default RatingBreakdown;