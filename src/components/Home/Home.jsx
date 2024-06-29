// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import LatestArticles from './LatestArticles';
import Categories from './Categories';
import ArticleList from '../Article/ArticleList'; // Import du composant ArticleList
import { getArticles } from '../services/api'; // Import de la fonction getArticles depuis api.js

const Home = () => {
  const [articles, setArticles] = useState([]);

  // Charger les articles depuis l'API au chargement initial du composant
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticles(); // Utilisation de la fonction getArticles pour charger les articles
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchForm />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <LatestArticles />
          <ArticleList articles={articles} /> {/* Utilisation du composant ArticleList avec les articles chargés depuis l'API */}
        </div>
        <div>
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Home;
