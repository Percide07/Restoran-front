// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Crée un contexte pour gérer les notifications
const NotificationContext = createContext();

// Hook personnalisé pour utiliser le contexte de notification
export const useNotifications = () => useContext(NotificationContext);

// Composant fournisseur pour gérer les notifications
export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  // Fonction pour afficher une notification
  const showNotification = (message) => {
    setNotification(message);
    // Ferme la notification automatiquement après 5 secondes
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {/* Affiche la notification si elle existe */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {notification}
        </div>
      )}
    </NotificationContext.Provider>
  );
};

// Validation des propTypes pour le composant NotificationProvider
NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valide que children est un élément React valide
};
