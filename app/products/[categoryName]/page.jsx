import { use } from 'react';
import ProductListClient from './ProductListClient';
import ProtectedPage from '@/app/components/ProtectedPage';

const mockProducts = [
    { id: 1, name: 'Rice', price: 3500, image: '/images/rice.jpg', category: 'Groceries' },
    { id: 2, name: 'Phone', price: 120000, image: '/images/phone.webp', category: 'Electronics' },
    // Add more as needed
];

export default function ProductPage({ params }) {
    const { categoryName } = use(params); // ✅ correct way

    const filteredProducts = mockProducts.filter(
        (product) =>
            product.category?.toLowerCase() === categoryName?.toLowerCase()
    );

    return (
        <ProtectedPage>
            <ProductListClient
                products={filteredProducts}
                categoryName={categoryName}
            />
        </ProtectedPage>
    );
}
