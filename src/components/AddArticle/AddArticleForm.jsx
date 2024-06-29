// eslint-disable-next-line no-unused-vars
import React from 'react';

const AddArticleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Ajouter un nouvel article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">Titre :</label>
          <input type="text" id="title" name="title" className="border border-gray-300 rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium">Description :</label>
          <textarea id="description" name="description" className="border border-gray-300 rounded px-3 py-2 w-full"></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block font-medium">Image URL :</label>
          <input type="text" id="image" name="image" className="border border-gray-300 rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="category" className="block font-medium">Catégorie :</label>
          <input type="text" id="category" name="category" className="border border-gray-300 rounded px-3 py-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ajouter</button>
      </form>
    </div>
  );
}

export default AddArticleForm;
