"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { categories } from "../vendor/dashboard/categories";
export default function ProductEditForm({ productId }) {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null, // new file if uploaded
        currentImage: "", // existing image URL
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchProduct() {
            const token = localStorage.getItem("vendorToken");
            const res = await fetch(`http://localhost:4000/api/vendor/items/${productId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) {
                const product = await res.json();
                setForm({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category: product.category,
                    image: null,
                    currentImage: product.image,
                });
            } else {
                setMessage("Failed to load product");
            }
        }
        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const token = localStorage.getItem("vendorToken");

            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("description", form.description);
            formData.append("price", form.price);
            formData.append("category", form.category);
            if (form.image) {
                formData.append("image", form.image);
            }
            const res = await fetch(`http://localhost:4000/api/vendor/items/${productId}`, {
                method: "PUT",
                headers: new Headers({
                    Authorization: `Bearer ${token}`,
                }),
                body: formData,
            });


            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Product updated successfully!");
                // Optional: redirect back to products list or details
                router.push(`/products/${form.category}`);
            } else {
                setMessage(`❌ ${data.message}`);
            }
        } catch {
            setMessage("❌ Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow rounded bg-white">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>

            <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={form.name}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                required
            />

            <textarea
                name="description"
                placeholder="Product Description"
                value={form.description}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                required
            />

            <input
                type="number"
                name="price"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                required
            />

            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                required
            >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name} className="text-black">
                        {cat.name}
                    </option>
                ))}
            </select>

            <div className="mb-3">
                <p>Current Image:</p>
                {form.currentImage && (
                    <img
                        src={`http://localhost:4000${form.currentImage}`}
                        alt={form.name}
                        className="w-40 h-40 object-cover rounded mb-2"
                    />
                )}
                <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="border p-2 w-full"
                    accept="image/*"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
                disabled={loading}
            >
                {loading ? "Updating..." : "Update Product"}
            </button>

            {message && <p className="mt-3">{message}</p>}
        </form>
    );
}
