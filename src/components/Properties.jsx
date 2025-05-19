import React, { useEffect, useState } from 'react';
import { getProperties } from '../api/api';
import Property from './Property';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await getProperties();
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    const filteredProperties = properties.filter((property) => {
        const min = minPrice ? parseFloat(minPrice) : 0;
        const max = maxPrice ? parseFloat(maxPrice) : Infinity;
        return property.price >= min && property.price <= max;
    });

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',     // center horizontally
                alignItems: 'center',         // center vertically
                backgroundColor: '#1e1e1e',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white',
                }}
            >
                <h2 style={{ marginBottom: '1rem' }}>Liste des propriétés</h2>

                <div style={{ marginBottom: '2rem' }}>
                    <input
                        type="number"
                        placeholder="Min price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        style={{ marginRight: '1rem', padding: '0.5rem' }}
                    />
                    <input
                        type="number"
                        placeholder="Max price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        style={{ padding: '0.5rem' }}
                    />
                </div>

                <div>
                    {filteredProperties.map((property) => (
                        <Property key={property.id} data={property} />
                    ))}
                    {filteredProperties.length === 0 && <p>Aucune propriété trouvée.</p>}
                </div>
            </div>
        </div>
    );

};

export default Properties;
