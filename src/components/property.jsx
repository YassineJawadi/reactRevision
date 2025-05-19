import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Property = () => {
    const { id } = useParams(); // get ID from URL
    const [property, setProperty] = useState(null);

    useEffect(() => {
        fetchProperty();
    }, [id]);

    const fetchProperty = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/properties/${id}`);
            setProperty(response.data);
        } catch (error) {
            console.error('Error fetching property:', error);
        }
    };

    if (!property) return <p>Loading...</p>;

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1e1e1e',
                color: 'white',
            }}
        >
            <div
                style={{
                    border: '1px solid #aaa',
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#2c2c2c',
                    width: '300px',
                }}
            >
                <h4>{property.title}</h4>
                <p><strong>Adresse:</strong> {property.address}</p>
                <p><strong>Prix:</strong> {property.price} DT</p>
                <p><strong>Nombre de Vue:</strong> {property.views}</p>
            </div>
        </div>
    );
};

export default Property;
