import React from 'react';


const OverviewFooter = ({item}) => {

  return (
      <div id="overviewFooter">
        <div>
          <h2>Product description</h2>
          <div>{item.description}</div>
        </div>
        <div>Social Media</div>
      </div>
  );
};

export default OverviewFooter;