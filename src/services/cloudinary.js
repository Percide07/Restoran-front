import axios from 'axios';

const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload';
const apiKey = 'YOUR_API_KEY';
const apiSecret = 'YOUR_API_SECRET';

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Définissez votre preset d'upload Cloudinary

  try {
    const response = await axios.post(cloudinaryUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      auth: {
        username: apiKey,
        password: apiSecret,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'image vers Cloudinary:', error);
    throw error;
  }
};

export { uploadImage };
