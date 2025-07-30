'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useSignup from '../hooks/useSignup';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, loading, success } = useSignup();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    // ✅ Redirect after success
    useEffect(() => {
        if (success) {
            setTimeout(() => {
                router.push('/categories');
            }, 1500); // wait 1.5s to show message before redirect
        }
    }, [success, router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>

                <div>
                    <label className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-600">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>

                {success && (
                    <div className="text-green-600 text-sm text-center">
                        ✅ Signup successful! Redirecting...
                    </div>
                )}

                {error && (
                    <div className="text-red-500 text-sm text-center">
                        ❌ {error}
                    </div>
                )}
            </form>
        </div>
    );
}
