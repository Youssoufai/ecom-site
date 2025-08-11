"use client";
import { useState } from "react";
import { categories } from "./categories";
import useVendorAuth from "../hooks/useVendorAuth";

export default function ProductForm() {
    const loading = useVendorAuth();


    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
    });

    const [submitLoading, setSubmitLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };
    if (loading) return <p>...loading</p>;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        setMessage("");

        try {
            const token = localStorage.getItem("vendorToken");

            const formData = new FormData();
            Object.keys(form).forEach((key) => {
                formData.append(key, form[key]);
            });

            const res = await fetch("http://localhost:4000/api/vendor/items/create", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Product created successfully!");
                setForm({ name: "", description: "", price: "", category: "", image: null });
            } else {
                setMessage(`❌ ${data.message}`);
            }
        } catch (error) {
            setMessage("❌ Something went wrong");
        } finally {
            setSubmitLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow rounded bg-white">
            <h2 className="text-xl font-bold mb-4">Create Product</h2>

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

            <input
                type="file"
                name="image"
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                accept="image/*"
                required
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
                disabled={submitLoading}
            >
                {submitLoading ? "Creating..." : "Create Product"}
            </button>

            {message && <p className="mt-3">{message}</p>}
        </form>
    );
}
