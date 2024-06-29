// utils/notifications.js
import React, { createContext, useContext, useState } from 'react';

// Crée un contexte pour gérer les notifications
const NotificationContext = createContext();

// Hook personnalisé pour utiliser le contexte des notifications
export const useNotifications = () => useContext(NotificationContext);

// Composant fournisseur pour gérer l'état des notifications
export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  // Fonction pour afficher une notification
  const showNotification = (message) => {
    setNotification(message);

    // Masque la notification après quelques secondes (par exemple, 5 secondes)
    setTimeout(() => {
      setNotification(null);
    }, 5000); // 5000 ms = 5 secondes
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}

      {/* Composant pour afficher la notification */}
      {notification && (
        <div className="fixed bottom-0 right-0 m-4 p-4 bg-blue-500 text-white shadow-lg rounded-lg">
          {notification}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
