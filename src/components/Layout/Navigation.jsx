// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-200 p-2">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link to="/" className="hover:text-gray-600">Accueil</Link>
        <Link to="/add-article" className="hover:text-gray-600">Ajouter un article</Link>
        <Link to="/about" className="hover:text-gray-600">À Propos</Link>
      </div>
    </nav>
  );
}

export default Navigation;
