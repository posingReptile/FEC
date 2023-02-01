import React from 'react';


const OverviewFooter = ({item}) => {

  return (
      <div id="overviewFooter">
        <div className="productDescription">
          <h2>Product description</h2>
          <div>{item.description}</div>
        </div>
        <div className="socialMedia"><h2>Social Media</h2></div>
      </div>
  );
};

export default OverviewFooter;