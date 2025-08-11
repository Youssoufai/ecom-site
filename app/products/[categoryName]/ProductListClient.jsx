"use client";

import { useState, useEffect } from "react";
import useCart from "@/app/hooks/useCart";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

export default function ProductListClient({ products, categoryName }) {
    const { addToCart } = useCart();
    const [vendorId, setVendorId] = useState(null);
    const [role, setRole] = useState(null);
    const [currentProducts, setProducts] = useState(products);

    useEffect(() => {
        const token = localStorage.getItem("vendorToken");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setVendorId(decoded.id || decoded._id);
                setRole(decoded.role);
            } catch {
                setVendorId(null);
                setRole(null);
            }
        }
    }, []);

    const formatPrice = (amount) =>
        `₦${amount.toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;

    const toggleDelete = async (id) => {
        try {
            const token = localStorage.getItem("vendorToken");

            const res = await fetch(`http://localhost:4000/api/vendor/items/${id}/toggle-delete`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to update product");
            }

            const data = await res.json();
            console.log(data.message);

            // Update state to reflect change immediately
            setProducts(prev =>
                prev.map(p => (p._id === data.product._id ? data.product : p))
            );

        } catch (err) {
            console.error("Error:", err.message);
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 capitalize">{categoryName} Products</h2>

            {currentProducts.length === 0 ? (
                <p className="text-gray-600 text-lg">No products found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {currentProducts.map((product) => {
                        const isOwner =
                            role === "vendor" &&
                            (product.vendor?._id || product.vendor) === vendorId;

                        return (
                            <div
                                key={product._id}
                                className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col ${product.deleted && isOwner ? "opacity-60" : ""
                                    }`}
                            >
                                <img
                                    src={`http://localhost:4000/uploads/${product.image}`}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800 truncate">
                                    {product.name}
                                </h3>
                                <p className="text-green-700 font-bold text-lg">
                                    {formatPrice(product.price)}
                                </p>

                                <div className="mt-auto flex flex-col gap-2 pt-4">
                                    {!product.deleted && (
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="text-sm px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                        >
                                            Add to Cart
                                        </button>
                                    )}

                                    {isOwner && (
                                        <>
                                            <Link href={`/vendor/products/${product._id}/edit`}>
                                                <button className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => toggleDelete(product._id)}
                                                className={`text-sm px-4 py-2 rounded-lg transition ${product.deleted
                                                    ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                                                    : "bg-red-500 hover:bg-red-600 text-white"
                                                    }`}
                                            >
                                                {product.deleted ? "Restore" : "Delete"}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
