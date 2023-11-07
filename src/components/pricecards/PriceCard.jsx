import React from 'react';
import ReactDOM from 'react-dom/client';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import FeatureItem from "./FeatureItem";

function Card(){      
const Card = ({ details }) => {
  return (
    <div className="col-lg-4 col-md-8">
      
      <div className="card mb-5 mb-lg-0">
        
        <div className="card-body">
          
          <h5 className="card-title text-muted text-uppercase text-center">{details.title}</h5>
          
          <h6 className="card-price text-center">${details.pack}<span className="period">/month</span></h6>
          
          <hr />
          
          
                );
              })}
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
            </div>
        </div>
      </div>
    </div>
  );
};



export default Card;
