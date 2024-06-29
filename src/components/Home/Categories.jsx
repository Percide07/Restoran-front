// eslint-disable-next-line no-unused-vars
import React from 'react';

const Categories = () => {
  const categories = ["Recettes", "Conseils de cuisine", "Nouvelles", "Vidéos"];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Catégories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="text-blue-500 hover:underline">{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
