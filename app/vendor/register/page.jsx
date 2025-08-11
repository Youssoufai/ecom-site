'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VendorRegisterPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: '',
        storeName: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('http://localhost:4000/api/vendor/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Signup failed');

            alert('Vendor registration successful!');
            router.push('/vendor/login');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Register as a Vendor</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        name="storeName"
                        placeholder="Store Name"
                        value={form.storeName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    />

                    {error && (
                        <p className="text-red-600 text-sm text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <p className="mt-6 text-sm text-center">
                    Already have an account?{' '}
                    <a href="/vendor/login" className="text-indigo-600 font-medium hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
