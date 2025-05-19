import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { updatePropertyViews } from '../api/api';



const Property = ({ data }) => {

    const navigate = useNavigate();

    const handleReserveClick = async () => {
        try {
            // 1. increment views via API
            await updatePropertyViews(data.id, data.views + 1);

            // 2. navigate to /reserve with selected property as state
            navigate('/reserve', { state: { property: data } });
        } catch (error) {
            console.error('Error reserving property:', error);
        }
    };



    return (
        <div
            style={{
                border: '1px solid #aaa',
                padding: '1rem',
                margin: '1rem auto',
                borderRadius: '8px',
                backgroundColor: '#2c2c2c',
                width: '300px',
                color: 'white'
            }}
        >
            <h4>{data.title}</h4>
            <p><strong>Adresse:</strong> {data.address}</p>
            <p><strong>Prix:</strong> {data.price} DT</p>
            <p><strong>Nombre de Vue:</strong> {data.views}</p>

            {data.available && (
                <button onClick={handleReserveClick}>
                    Réserver la propriété
                </button>
            )}
        </div>
    );
};

export default Property;
