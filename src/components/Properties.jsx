import React, { useEffect, useState } from 'react';
import { getProperties } from '../api/api';
import Property from './Property';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        fetchProperties();
    }, []);

    useEffect(() => {
        filterProperties();
    }, [minPrice, maxPrice, properties]);

    const fetchProperties = async () => {
        try {
            const response = await getProperties();
            console.log("API response:", response.data); // 👈 Add this
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };


    const filterProperties = () => {
        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || Infinity;

        const filteredList = properties.filter(
            (property) => property.price >= min && property.price <= max
        );
        setFiltered(filteredList);
    };

    return (
        <div>
            <h2>Available Properties</h2>

            <div>
                {/*<input*/}
                {/*    type="number"*/}
                {/*    placeholder="Min Price"*/}
                {/*    value={minPrice}*/}
                {/*    onChange={(e) => setMinPrice(e.target.value)}*/}
                {/*/>*/}
                {/*<input*/}
                {/*    type="number"*/}
                {/*    placeholder="Max Price"*/}
                {/*    value={maxPrice}*/}
                {/*    onChange={(e) => setMaxPrice(e.target.value)}*/}
                {/*/>*/}
            </div>

            <div>
                {filtered.map((property) => (
                    <Property key={property.id} data={property} />
                ))}
            </div>
        </div>
    );
};

export default Properties;
