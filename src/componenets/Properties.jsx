import React, { useEffect, useState } from 'react';
import Property from './Property';

const Properties = () => {



    //recherche stuff


     const [query, setQuery] = useState('');

  const filtered = data.filter(item =>
    query === '' || item.price <= parseFloat(query)
  );

    //recherche stuff





  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/properties')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched properties:', data);  // <-- Add this here
        setProperties(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);  // <-- And this here
        setLoading(false);
      });
  }, []);

  console.log('properties state:', properties);  // <-- Add this here (inside component, before return)

  if (loading) return <p>Loading...</p>;
  if (!properties.length) return <p>No properties found</p>;

  return (
    <div>

{/* search related div */}

       <div>
      <input
        type="number"
        placeholder="Search by max price..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filtered.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>


{/* end of search related div */}



      {properties.map(prop => (
        <Property key={prop.id} property={prop} />
      ))}
    </div>
  );
};

export default Properties;
