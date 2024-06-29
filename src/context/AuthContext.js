// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import axios from '../services/api'; 
import { useNotifications } from '../utils/notifications';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { showNotification } = useNotifications();
  const history = useHistory();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('/auth/check');
      setUser(response.data.user);
    } catch (error) {
      console.error('Error checking authentication:', error);
      setUser(null);
    }
  };

  // Function to log in
  const login = async (credentials) => {
    try {
      const response = await axios.post('/auth/login', credentials); // Endpoint to log in server-side
      setUser(response.data.user);
      showNotification('Successfully logged in!');
      history.push('/'); // Redirect to home page after login
    } catch (error) {
      console.error('Error logging in:', error);
      showNotification('Login failed. Please try again.');
    }
  };

  // Function to log out
  const logout = async () => {
    try {
      await axios.post('/auth/logout'); // Endpoint to log out server-side
      setUser(null);
      showNotification('Successfully logged out!');
      history.push('/'); // Redirect to home page after logout
    } catch (error) {
      console.error('Error logging out:', error);
      showNotification('Logout failed. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes validation for AuthProvider component
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a valid React node
};
