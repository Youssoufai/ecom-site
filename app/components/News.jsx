'use client';

import { articles } from "../data/articles";

export default function LatestNews() {


    return (
        <section className="bg-white px-6 md:px-20 py-16">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
                    <p className="text-gray-500">Feugiat pretium nibh ipsum consequat commodo.</p>
                </div>
                <button className="text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">
                    View All
                </button>
            </div>

            {/* News Cards */}
            <div className="grid md:grid-cols-3 gap-8">
                {articles.map((item, index) => (
                    <div key={index} className="bg-white shadow rounded-2xl overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-64 w-full object-cover"
                        />
                        <div className="p-6">
                            <span className="text-sm text-indigo-500 font-semibold uppercase">{item.category}</span>
                            <h3 className="mt-2 text-xl font-bold text-gray-800">{item.title}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{item.excerpt}</p>
                            <button className="mt-4 inline-block text-sm text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
