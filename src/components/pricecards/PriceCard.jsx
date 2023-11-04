
import React from 'react';
import './style.css';

export default function PriceCard({ title, price, features }) {
    const createFeatureList = () => {
    return features.map((feature, index) => (
      <li key={index}>
        {feature.symbol} {feature.text}
      </li>
    ));
  };

  return (
       <div className="price-card">
      <h2>{title}</h2>
      <h1>${price} per month</h1>
      <ul>{createFeatureList()}</ul>
      <button>Button</button>
    </div>
   
  );
}
