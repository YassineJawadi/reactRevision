import React, { useEffect, useState } from 'react';
import { getProperties } from '../api/api';
import Property from './Property';

const Properties = () => {
    const [properties, setProperties] = useState([]);

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

    return (
        <div>
            <h2>Liste des propriétés</h2>
            {properties.map((property) => (
                <Property key={property.id} data={property} />
            ))}
        </div>
    );
};

export default Properties;
