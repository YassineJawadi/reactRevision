import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Properties from './components/Properties';
import Property from "./components/property.jsx";
// ReservationForm can be added later
import ReservationForm from './components/ReservationForm';

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Properties />} />
                <Route path="/reserve" element={<ReservationForm />} />

            </Routes>
        </div>
    );
};

export default App;
