'use client'

import Image from 'next/image'

const categories = [
    {
        name: 'Laptops',
        count: 245,
        image: '/images/category-laptops.webp',
    },
    {
        name: 'Drones',
        count: 28,
        image: '/images/category-drones-2.webp',
    },
    {
        name: 'Smartphones',
        count: 273,
        image: '/images/category-phones.webp',
    },
    {
        name: 'Gaming',
        count: 25,
        image: '/images/category-gaming.webp',
    },
]

export default function Categories() {
    return (
        <section className="bg-gradient-to-r from-[#f9f9f9] to-[#f1f5f9] py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-gray-400 text-sm">{item.count}</p>
                        </div>
                        <div className="mt-4 flex justify-center items-end">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={200}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
