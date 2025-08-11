'use client';

import useCart from "@/app/hooks/useCart";
import Link from "next/link";

export default function ProductListClient({ products, categoryName }) {
    const { addToCart } = useCart();

    const formatPrice = (amount) =>
        `₦${amount.toLocaleString('en-NG', { maximumFractionDigits: 0 })}`;

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 capitalize">{categoryName} Products</h2>

            {products.length === 0 ? (
                <p className="text-gray-600">No products found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id} // unique key fix
                            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-4"
                        >
                            <img
                                src={`http://localhost:4000${product.image}`} // use full URL with image path from DB
                                alt={product.name}
                                className="w-full h-44 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-green-700 font-medium">{formatPrice(product.price)}</p>

                            <div className="mt-4 flex flex-col gap-2">
                                <button className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
                                    View Details
                                </button>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="text-sm px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                >
                                    Add to Cart
                                </button>
                                import Link from "next/link";

                                // inside your product map, add:
                                <Link href={`/vendor/products/${product._id}/edit`}>
                                    <button className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
                                        Edit
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
