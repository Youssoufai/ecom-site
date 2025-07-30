'use client';

import { ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
export default function FeaturedProducts() {
    return (
        <section className="py-16 bg-white px-4 md:px-20">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                    <p className="text-gray-500">Feugiat pretium nibh ipsum consequat commodo.</p>
                </div>
                <button className="text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">
                    View All
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {products.map((product, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-xl flex flex-col items-center text-center shadow-sm">
                        <img src={product.image} alt={product.name} className="h-40 object-contain mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-gray-700 text-lg mb-1">{product.price}</p>
                        <span className="text-xs text-gray-500 mb-4">{product.category}</span>
                        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                            <ShoppingCart className="w-4 h-4" />
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
