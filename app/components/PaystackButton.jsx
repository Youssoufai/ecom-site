'use client';
import { useEffect } from 'react';

const PaystackButton = ({ email, amount, publicKey }) => {
    useEffect(() => {
        // Load Paystack script on component mount
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handlePayment = () => {
        if (!window.PaystackPop) return alert('Paystack not loaded yet');

        const handler = window.PaystackPop.setup({
            key: publicKey,
            email,
            amount: amount * 100, // Amount in kobo
            currency: 'NGN',
            ref: '' + Math.floor(Math.random() * 1000000000 + 1),
            callback: function (response) {
                alert('Payment successful. Transaction ref is ' + response.reference);
                // You can verify transaction here or hit your backend
            },
            onClose: function () {
                alert('Transaction was not completed, window closed.');
            },
        });

        handler.openIframe();
    };

    return (
        <button
            onClick={handlePayment}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
            Pay Now
        </button>
    );
};

export default PaystackButton;
