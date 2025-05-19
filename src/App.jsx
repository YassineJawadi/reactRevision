import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Properties from './components/Properties';
import Property from "./components/property.jsx";
// ReservationForm can be added later

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Properties />} />
                <Route path="/property/:id" element={<Property />} />
            </Routes>
        </div>
    );
};

export default App;
