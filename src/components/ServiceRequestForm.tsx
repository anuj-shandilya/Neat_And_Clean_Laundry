import React, { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    service: string;
    pickupDateTime: string;
    address: string;
};

const services = [
    "Dry Cleaning",
    "Wash & Iron",
    "Shoe Laundry",
    "Luggage Laundry",
    "Steam Iron",
    "Carpet Cleaning"
];

const ServiceRequestForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        service: '',
        pickupDateTime: '',
        address: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isValidPickupTime = (dateTime: string) => {
        if (!dateTime) return false;
        const date = new Date(dateTime);
        const hours = date.getHours();
        return hours >= 9 && hours < 21; // 9:00 to 20:59
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.service || !formData.pickupDateTime || !formData.address) {
            setError('Please fill in all fields');
            return;
        }

        if (!isValidPickupTime(formData.pickupDateTime)) {
            setError('Pickup time must be between 9 AM and 9 PM');
            return;
        }

        setError('');
        try {
            const response = await fetch('/api/sendRequest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });


            const data = await response.json();
            if (response.ok) {
                setMessage('Request submitted successfully! You will receive a confirmation email.');
                setFormData({ name: '', email: '', service: '', pickupDateTime: '', address: '' });
            } else {
                setError(data.error || 'Failed to submit request');
            }
        } catch (err) {
            setError('Error: Could not send request');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8">
            <h2 className="text-2xl mb-4 font-semibold text-[#48C9B0]">Request a Service</h2>
            <form onSubmit={handleSubmit}>

                <label className="block mb-1 font-medium" htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    placeholder="Your full name"
                    required
                />

                <label className="block mb-1 font-medium" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    placeholder="Your email address"
                    required
                />

                <label className="block mb-1 font-medium" htmlFor="address">Address</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    placeholder="Pickup address"
                    required
                />

                <label className="block mb-1 font-medium" htmlFor="service">Select Service</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    required
                >
                    <option value="">-- Choose a service --</option>
                    {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>

                <label className="block mb-1 font-medium" htmlFor="pickupDateTime"></label>
                <input
                    id="pickupDateTime"
                    name="pickupDateTime"
                    type="datetime-local"
                    step={3600}
                    min="09:00"
                    max="21:00"
                    value={formData.pickupDateTime}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    required
                />

                {error && <p className="text-red-600 mb-2">{error}</p>}
                {message && <p className="text-green-600 mb-2">{message}</p>}

                <button
                    type="submit"
                    className="w-full bg-[#48C9B0] text-white p-2 rounded hover:bg-[#3BB39B] transition"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default ServiceRequestForm;
