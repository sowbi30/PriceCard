
import React from 'react';
import './App.css';
import './components/pricecards/PriceCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="box my-5 py-5">
      <div className='heading text-center'>
        <h1>PRICE-CARD</h1>
      </div>

      <div className="row">

        <div className="col-lg-4 col-md-6">
          <div className="card">
              <div className="title">
                <span>FREE</span>
                <h1 className='price'>$0/month</h1>
              </div>
              <div className="features">
              <ul>
                  <li><span className="r">&#10004;</span>Single User</li>
                  <li><span  className="r">&#10004;</span>50GB Storage</li>
                  <li><span  className="r">&#10004;</span>Unlimited Public Projects</li>
                  <li><span className="r">&#10004;</span>Community Access</li>
                  <li className='wrong'><span className="w">&#10006;</span>Unlimited Private Projects</li>
                  <li className='wrong'><span className="w">&#10006;</span>Dedicated Phone Support</li>
                  <li className='wrong'><span className="w">&#10006;</span>Free Subdomain</li>
                  <li className='wrong'><span className="w">&#10006;</span>Monthly Status Reports</li>
                </ul>
                <div className="button">
                  <button>BUTTON</button>
                </div>

              </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
              <div className="title">
                <span>PLUS</span>
                <h1 className='price'>&#x24;9/month</h1>
              </div>
              <div className="features">
              <ul>
                  <li><span className="r">&#10004;</span>5 Users</li>
                  <li><span className="r">&#10004;</span>50GB Storage</li>
                  <li><span className="r">&#10004;</span>Unlimited Public Projects</li>
                  <li><span className="r">&#10004;</span>Community Access</li>
                  <li><span className="r">&#10004;</span>Unlimited Private Projects</li>
                  <li><span className="r">&#10004;</span>Dedicated Phone Support</li>
                  <li><span className="r">&#10004;</span>Free Subdomain</li>
                  <li className='wrong'><span className="w">&#10006;</span>Monthly Status Reports</li>
                </ul>
                <div className="button">
                  <button>BUTTON</button>
                </div>

              </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
              <div className="title">
                <span>PRO</span>
                <h1 className='price'>&#x24;49/month</h1>
              </div>
              <div className="features">
              <ul>
                  <li><span className="r">&#10004;</span>Unlimited Users</li>
                  <li><span className="r">&#10004;</span>50GB Storage</li>
                  <li><span className="r">&#10004;</span>Unlimited Public Projects</li>
                  <li><span className="r">&#10004;</span>Community Access</li>
                  <li><span className="r">&#10004;</span>Unlimited Private Projects</li>
                  <li><span className="r">&#10004;</span>Dedicated Phone Support</li>
                  <li><span className="r">&#10004;</span>Free Subdomain</li>
                  <li><span className="r">&#10004;</span>Monthly Status Reports</li>
                </ul>
             
                <div className="button">
                  <button>BUTTON</button>
                </div>

              </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;