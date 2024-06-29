// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

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
