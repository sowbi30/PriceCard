import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import PriceCard from '.components/pricecards/PriceCard';

import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  const plandetails = [
    {
      price: 0,
      planName: 'FREE',
      users: 'Single User',
      gb: '10GB Storage',
      Publicproject: '10 Public Projects',
      access: 'Limited Access',
      project: '2 Private Projects',
      support: 'Email Support',
      domain: 'No Subdomain',
      reports: 'Monthly Status Reports',
    },
    {
      price: 9,
      planName: 'PLUS',
      users: 'Multiple Users',
      gb: '50GB Storage',
      Publicproject: 'Unlimited Public Projects',
      access: 'Full Access',
      project: '10 Private Projects',
      support: 'Phone Support',
      domain: 'Custom Domain',
      reports: 'Weekly Status Reports',
    },
    {
      price: 49,
      planName: 'PRO',
      users: 'Single User',
      gb: '5GB Storage',
      Publicproject: 'Unlimited Public Projects',
      access: 'Limited Access',
      project: '1 Private Project',
      support: 'No Support',
      domain: 'Free Subdomain',
      reports: 'No Reports',
    },
  ];

  return (
    <div className='page'>
    <section class="pricing py-5">
    <div className="container">
      <div className="row">
        <div className="col">
        </div>
      </div>
      <div className="row">
        {plandetails.map((details, index) => (
          <Card details={details} key={index} />
        ))}
      </div>
    </div>
    </section>
    </div>
  );
}

export default App;


