// eslint-disable-next-line no-unused-vars
import React from 'react';

const LatestArticles = () => {
  const latestArticles = [
    { id: 1, title: "Titre de l'article 1", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Titre de l'article 2", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Titre de l'article 3", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Derniers articles</h2>
      {latestArticles.map(article => (
        <div key={article.id} className="flex items-center space-x-4 mb-4">
          <img src={article.image} alt={article.title} className="w-20 h-20 object-cover rounded" />
          <div>
            <h3 className="font-semibold">{article.title}</h3>
            <p className="text-gray-500">Date de publication</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestArticles;
