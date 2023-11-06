import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck as faCheckRegular } from '@fortawesome/free-regular-svg-icons';
import './Style.css';

function Pricecard() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Single User</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>5GB Storage</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
                  <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Unlimited Private Projects</li>
                  <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Dedicated Phone Support</li>
                  <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Free Subdomain</li>
                  <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>5 Users</strong></li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>50GB Storage</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Private Projects</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Dedicated Phone Support</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Free Subdomain</li>
                  <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
          {/* Pro Tier */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon icon={faCheckRegular} /></span><strong>Unlimited Users</strong></li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon icon={faCheckRegular} /></span>150GB Storage</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon icon={faCheckRegular} /></span>Unlimited Public Projects</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon icon={faCheckRegular} /></span>Community Access</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon icon={faCheckRegular} /></span>Unlimited Private Projects</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon icon={faCheckRegular} /></span>Dedicated Phone Support</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /><FontAwesomeIcon icon={faCheckRegular} /></span><strong>Unlimited</strong> Free Subdomains</li>
                  <li><span className="fa-li"><FontAwesomeIcon icon={faCheckRegular} /></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricecard;
