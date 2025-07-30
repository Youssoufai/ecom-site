'use client';


import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import ProtectedPage from '../components/ProtectedPage';

export default function CartPage() {
    const { cartItems, removeFromCart } = useCart();
    const router = useRouter();

    const handleCheckout = (item) => {
        const handler = window.PaystackPop && window.PaystackPop.setup({
            key: 'pk_test_f39562ed544b9b0b36ab057a73baf28ff4ba6aee', // Replace with your public Paystack key
            email: 'yusufmuhammadzakarya@gmail.com', // Dynamically get this if your app has user login
            amount: item.price * 100, // Convert to kobo
            currency: 'NGN',
            ref: `${Date.now()}`,
            metadata: {
                custom_fields: [
                    {
                        display_name: item.title,
                        variable_name: "product_id",
                        value: item.id || "N/A",
                    },
                ],
            },
            callback: function (response) {
                alert(`Payment complete! Reference: ${response.reference}`);
                // You can call your backend to verify payment or remove from cart
            },
            onClose: function () {
                alert('Transaction was not completed, window closed.');
            },
        });

        if (handler) handler.openIframe();
        else alert("Paystack SDK not loaded.");
    };


    return (
        <ProtectedPage>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="grid gap-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="border p-4 rounded-lg shadow flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleCheckout(item)}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    >
                                        Checkout
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ProtectedPage>
    );
}
