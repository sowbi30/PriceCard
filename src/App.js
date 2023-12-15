import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PriceCard from "./PriceCard";


function App() {
  const Plandetails = {
      "free": [
        {"id":"0", "title":"Single User", "availability": true, "iconSize": "5x" },
        {"id":"1", "title":"5GB Storage", "availability": true,"iconSize": "5x" },
        {"id":"2", "title":"Unlimited Public Projects", "availability": true ,"iconSize": "5x" },
        {"id":"3", "title":"Community Access", "availability": true ,"iconSize": "5x" },
        {"id":"4", "title":"Unlimited Private Projects", "availability": false,"iconSize": "5x"  },
        {"id":"5", "title":"Dedicated Phone Support", "availability": false,"iconSize": "5x"  },
        {"id":"6", "title":"Free Subdomain", "availability": false,"iconSize": "5x"  },
        {"id":"7", "title":"Monthly Status Reports", "availability": false,"iconSize": "5x"  },
      ],
      "plus": [
        {"id":"8", "title":"5 Users", "availability": true,"iconSize": "5x"  },
        {"id":"9", "title":"50GB Storage", "availability": true,"iconSize": "5x"  },
        {"id":"10", "title":"Unlimited Public Projects", "availability": true,"iconSize": "5x"  },
        {"id":"11", "title":"Community Access", "availability": true,"iconSize": "5x"  },
        {"id":"12", "title":"Unlimited Private Projects", "availability": true,"iconSize": "5x"  },
        {"id":"13", "title":"Dedicated Phone Support", "availability": true ,"iconSize": "5x" },
        {"id":"14", "title":"Free Subdomain", "availability": true,"iconSize": "5x"  },
        {"id":"15", "title":"Monthly Status Reports", "availability": false ,"iconSize": "5x" },
      ],
      "pro": [
        {"id":"16", "title":"Unlimited Users", "availability": true,"iconSize": "5x"  },
        {"id":"17", "title":"150GB Storage", "availability": true ,"iconSize": "5x" },
        {"id":"18", "title":"Unlimited Public Projects", "availability": true ,"iconSize": "5x" },
        {"id":"19", "title":"Community Access", "availability": true,"iconSize": "5x"  },
        {"id":"20", "title":"Unlimited Private Projects", "availability": true,"iconSize": "5x" },
        {"id":"21", "title":"Dedicated Phone Support", "availability": true,"iconSize": "5x"  },
        {"id":"22", "title":"Free Subdomain", "availability": true ,"iconSize": "5x" },
        {"id":"23", "title":"Monthly Status Reports", "availability": true,"iconSize": "5x"  },
      ]

  };

const renderPriceCards = (plan, index) => (
    <PriceCard
      key={index}
      tier={plan}
      pricing={index === 0 ? 0 : index === 1 ? 9 : 49}  // Assuming the pricing is incremental
      features={PlanDetails[plan]}
    />
  );

  const planTiers = Object.keys(PlanDetails);

  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {planTiers.map((plan, index) => renderPriceCards(plan, index))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
