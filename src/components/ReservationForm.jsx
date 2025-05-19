import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updatePropertyAvailability, updatePropertyViews } from '../api/api';

const ReservationForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { property } = location.state || {};

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [message, setMessage] = useState('');

    if (!property) return <p>Aucune propriété sélectionnée.</p>;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Calculate number of days
        const days = Math.ceil(
            (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
        );

        // 2. Calculate total price
        const total = days * property.price;

        // 3. Update views in API
        await updatePropertyViews(property.id, property.views + 1);

        // 4. Update availability
        await updatePropertyAvailability(property.id, false);

        // 5. Show confirmation message
        const fullName = name.trim();
        setMessage(
            `Mr|Mme ${fullName} votre réservation pour la propriété ${property.title} est confirmée pour un prix de ${total} DT.`
        );

        // 6. Reset form
        setName('');
        setPhone('');
        setStartDate('');
        setEndDate('');

        // 7. Redirect after 5 seconds
        setTimeout(() => {
            navigate('/');
        }, 5000);
    };

    return (
        <div>
            <h2>Réserver la propriété avec ID: {property.id}</h2>

            {!message ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nom du locataire :</label><br />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Numéro de téléphone :</label><br />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Date de début de la location :</label><br />
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Date du fin de la location :</label><br />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                        />
                    </div>

                    <br />
                    <button type="submit">Valider</button>
                </form>
            ) : (
                <div>
                    <p>{message}</p>
                    <p>Redirection vers la liste des propriétés dans 5 secondes...</p>
                </div>
            )}
        </div>
    );
};

export default ReservationForm;
