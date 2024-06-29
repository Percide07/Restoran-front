// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();

  const article = {
    id: id,
    title: "Titre de l'article",
    description: "Description de l'article...",
    image: "https://via.placeholder.com/150",
    category: "Recettes",
    content: "Contenu détaillé de l'article...",
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">{article.title}</h2>
      <div className="flex items-center mt-2">
        <img src={article.image} alt={article.title} className="w-20 h-20 object-cover rounded-full" />
        <span className="ml-4">{article.category}</span>
      </div>
      <p className="mt-4">{article.description}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Contenu :</h3>
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default ArticleDetail;
