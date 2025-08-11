const AddItemForm = ({ vendorId, onAdded }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('vendorToken');

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vendor/${vendorId}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, description: desc, price, categoryId })
        });

        if (res.ok) {
            if (onAdded) onAdded();
            setTitle('');
            setDesc('');
            setPrice('');
            setCategoryId('');
        } else {
            console.error('Failed to add item');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <CategoryDropdown selected={categoryId} onChange={setCategoryId} />
            <button type="submit">Add Item</button>
        </form>
    );
};
