// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../utils/notifications';

const Home = () => {
  const { user, logout } = useAuth(); // Obtient l'utilisateur et la fonction de déconnexion depuis le contexte d'authentification
  const { showNotification } = useNotifications(); // Obtient la fonction d'affichage de notification depuis le gestionnaire de notifications

  const handleLogout = () => {
    logout(); // Appelle la fonction de déconnexion du contexte d'authentification
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur notre Blog</h1>
        {user ? (
          <div>
            <p>Connecté en tant que: {user.username}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 rounded-md"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </div>
        ) : (
          <p>Vous êtes hors connexion.</p>
        )}
        
      </div>
    </div>
  );
};

export default Home;
