import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="border p-4">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <h3 className="font-bold">{product.title}</h3>
            <p>₦{product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-black text-white px-4 py-2 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
}
