"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cartItems, removeFromCart, clearCart } = useCart();


    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cartItems.map((item) => (
                            <li key={item.id} className="border p-4 rounded">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p>₦{item.price} x {item.quantity}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 text-right">
                        <p className="text-lg font-bold">Total: ₦{total}</p>
                        <button
                            onClick={clearCart}
                            className="mt-2 bg-gray-800 text-white px-4 py-2 rounded"
                        >
                            Clear Cart
                        </button>
                        <a href="/checkout">
                            <button className="ml-4 mt-2 bg-green-600 text-white px-4 py-2 rounded">
                                Proceed to Checkout
                            </button>
                        </a>
                    </div>
                </>
            )}
        </div>
    );
}
