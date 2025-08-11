"use client"
import ProductEditForm from "@/app/components/EditItemForm";
import ProtectedPage from "@/app/components/ProtectedPage";
export default function EditProductPage({ params }) {
    const { id } = params;

    return (
        <ProtectedPage>
            <div className="container mx-auto p-6">
                <ProductEditForm productId={id} />
            </div>
        </ProtectedPage>
    );
}
