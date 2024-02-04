// import React from "react";
// import "./Room.css";

// const Room = () => {
//   return (
//     <div className="price">
      
//     </div>
//   );
// };

// export default Room;

import React from "react";
import "./Room.css";

const Room = () => {
  const pricingOptions = [
    {
      id: 1,
      title: "Basic",
      price: 0,
      description: "Access to core fitness classes",
      
    },
    {
      id: 2,
      title: "Premium",
      price: 49.99,
      description: "Access to all fitness classes + Diet Plans",
    },
    {
      id: 3,
      title: "Pro",
      price: 69.99,
      description: "Access to all fitness classes + Diet Plans + Personal Recommendations",
      
    },
  ];

  return (
    <div>
    <h1>Revenue Model</h1>
      <div className="price">
        {pricingOptions.map((option) => (
          <div key={option.id} className="price-card">
            <h2>{option.title}</h2>
            <span className="price-tag">${option.price}/month</span>
            <p>{option.description}</p>
            
            {option.featured && <span className="featured-badge">Featured</span>}
            {/* Add button or link to purchase here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
