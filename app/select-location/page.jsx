'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedPage from '../components/ProtectedPage';

const countries = {
    Nigeria: ['Abuja', 'Lagos', 'Kano', 'Ibadan'],
    Ghana: ['Accra', 'Kumasi', 'Tamale'],
    Kenya: ['Nairobi', 'Mombasa', 'Kisumu'],
};

export default function LocationSelect() {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!country || !city) return;

        console.log(`Selected: ${country} - ${city}`);

        // Pass selected location as query parameters
        router.push(`/categories?country=${country}&city=${city}`);
    };

    return (
        <ProtectedPage>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-800">Select Location</h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
                        <select
                            value={country}
                            onChange={(e) => {
                                setCountry(e.target.value);
                                setCity('');
                            }}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- Select Country --</option>
                            {Object.keys(countries).map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">City</label>
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            disabled={!country}
                            className="w-full border border-gray-300 rounded-lg p-2 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- Select City --</option>
                            {country &&
                                countries[country].map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={!country || !city}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </ProtectedPage>
    );
}
