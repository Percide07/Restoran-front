// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Base URL de votre API json-server
  timeout: 5000, // Timeout de 5 secondes pour chaque requête
});

export default instance;
