// pages/ViewArticle.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Utilise useParams pour obtenir les paramètres d'URL
import { useAuth } from '../context/AuthContext'; // Utilise le contexte d'authentification

const ViewArticle = () => {
  const { id } = useParams(); // Obtient l'ID de l'article depuis les paramètres d'URL
  const { user } = useAuth(); // Obtient l'utilisateur depuis le contexte d'authentification

  // Simulation des détails de l'article à partir d'une API ou de données
  const article = {
    id: id,
    title: 'Titre de l\'article',
    content: 'Contenu de l\'article ici...',
    // Ajoutez d'autres détails d'article comme l'image, la catégorie, etc.
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="mb-4">{article.content}</p>
        {user && (
          <div>
            {/* Ajoutez des fonctionnalités supplémentaires comme l'édition ou la suppression de l'article */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewArticle;
