'use client';

import { useRouter } from 'next/navigation';
import { categories } from '../data/categories';
import ProtectedPage from '../components/ProtectedPage';

export default function CategoriesPage() {
    const router = useRouter();

    const handleCategoryClick = (categoryName) => {
        router.push(`/products/${categoryName}`);
    };

    return (
        <ProtectedPage>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-6">Select a Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => handleCategoryClick(category.name)}
                            className="cursor-pointer rounded-xl shadow hover:shadow-md transition p-4 bg-white flex flex-col items-center justify-center text-center focus:outline-none"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-24 h-24 object-cover rounded-full mb-2"
                            />
                            <p className="text-sm font-medium">{category.name}</p>
                        </button>
                    ))}
                </div>
            </div>
        </ProtectedPage>
    );
}
