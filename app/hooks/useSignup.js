"use client";

import { useState } from 'react';
import { useAuthContext } from '../context/useAuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false); // ✅ new
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch('http://localhost:4000/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.err || 'Signup failed');

            dispatch({ type: 'LOGIN', payload: data }); // if you're returning { email, token }

            setSuccess(true); // ✅ success
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading, error, success };
};

export default useSignup;
