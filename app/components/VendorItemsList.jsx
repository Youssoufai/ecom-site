export default function VendorItemsList({ vendorId }) {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const token = localStorage.getItem('vendorToken');
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vendor/${vendorId}/items/my-items`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            if (Array.isArray(data)) {
                setItems(data);
            } else if (Array.isArray(data.items)) {
                setItems(data.items);
            } else {
                setItems([]);
            }
        } catch (err) {
            console.error('Failed to fetch items', err);
            setItems([]);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [vendorId]);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">My Products/Services</h2>
            {items.map(item => (
                <div key={item._id} className="border p-3 mb-2 rounded">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="space-x-2">
                        <button onClick={() => console.log("Edit logic here")}>Edit</button>
                        <button
                            onClick={async () => {
                                const token = localStorage.getItem('vendorToken');
                                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vendor/${vendorId}/items/${item._id}/delete`, {
                                    method: 'PATCH',
                                    headers: { Authorization: `Bearer ${token}` }
                                });
                                fetchItems();
                            }}
                        >
                            Delete
                        </button>
                        <button
                            onClick={async () => {
                                const token = localStorage.getItem('vendorToken');
                                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vendor/${vendorId}/items/${item._id}/restore`, {
                                    method: 'PATCH',
                                    headers: { Authorization: `Bearer ${token}` }
                                });
                                fetchItems();
                            }}
                        >
                            Restore
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
