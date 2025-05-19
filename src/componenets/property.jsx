// src/components/Property.jsx
import React from 'react';

const Property = ({ property }) => {
  if (!property) return <p>No property data.</p>;

  return (
    <div style={{ border: '1px solid black', padding: 10, margin: 10 }}>
      <h3>{property.title}</h3>
      <p>Price: ${property.price}</p>
      <p>Available: {property.available ? 'Yes' : 'No'}</p>
      <p>Views: {property.views}</p>
    </div>
  );
};

export default Property;
