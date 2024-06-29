// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../utils/notifications';

const AddArticle = () => {
  const { user } = useAuth(); // Obtient l'utilisateur depuis le contexte d'authentification
  const { showNotification } = useNotifications(); // Obtient la fonction d'affichage de notification depuis le gestionnaire de notifications

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre l'article à l'API
    showNotification('Article ajouté avec succès !');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-4">Ajouter un nouvel article</h1>
        {user ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Titre
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Ajouter un article
            </button>
          </form>
        ) : (
          <p>Vous devez être connecté pour ajouter un article.</p>
        )}
      </div>
    </div>
  );
};

export default AddArticle;
