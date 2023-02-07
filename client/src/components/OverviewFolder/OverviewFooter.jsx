import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

const OverviewFooter = ({item}) => {
  const allFeatures = item.features || [];
  return (
      <div id="overviewFooter" data-testid="testOF">
        <div className="productDescription">
          <h2>Product description</h2>
          <div id="itemDescription">{item.description}</div>
        </div>
        <div id="productFeatures">
        {allFeatures.map(({feature, value}, index) => (
                <div className="feature" key={index}>
                  {value ? <p className="featureText"><AiOutlineCheck/>&nbsp;&nbsp;{value}</p> : null}
                </div>
            ))}
        </div>

      </div>
  );
};

export default OverviewFooter;