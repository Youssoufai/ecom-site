import React from 'react';
import categories from '@/shared/categories';
const CategoryDropdown = ({ selected, onChange }) => {
    return (
        <select value={selected} onChange={(e) => onChange(e.target.value)} required>
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
                <option key={index} value={cat.name}>
                    {cat.name}
                </option>
            ))}
        </select>
    );
};

export default CategoryDropdown;
