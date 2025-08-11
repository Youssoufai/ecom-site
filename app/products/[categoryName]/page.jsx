import ProductListClient from './ProductListClient';
import ProtectedPage from '@/app/components/ProtectedPage';

export default async function ProductPage({ params }) {
    const { categoryName } = await params;

    // Fetch products from backend API by category
    const res = await fetch(`http://localhost:4000/api/vendor/items/category/${categoryName}`, {
        cache: 'no-store'  // avoid stale cache
    });

    const products = res.ok ? await res.json() : [];

    return (
        <ProtectedPage>
            <ProductListClient
                products={products}
                categoryName={categoryName}
            />
        </ProtectedPage>
    );
}
