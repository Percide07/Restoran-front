// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-md mb-2" />
      <h3 className="text-xl font-semibold">{article.title}</h3>
      <p className="text-gray-500 mb-2">{article.category}</p>
      <Link to={`/article/${article.id}`} className="text-blue-500 hover:underline">Lire plus</Link>
    </div>
  );
}

// Validation des props avec PropTypes
ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCard;
