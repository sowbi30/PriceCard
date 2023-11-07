import React from 'react'


function PriceCard({ details }) {
  return (
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
        <header>
        <h6 className="card-title text-muted text-uppercase text-center">{details.planName}</h6>
        <h1 className="card-price text-center"><span className="period">${details.price}<sub>/month</sub></span></h1>
        </header>
        <ul className="fa-ul">
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.users}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.gb}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.Publicproject}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.access}</li>
          <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.project}</li>
          <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.support}</li>
          <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.domain}</li>
          <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.reports}</li>
        </ul>
        <div className="d-grid">
          <a className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
      /</div>
    </div>
  );
}

  export default PriceCard;


