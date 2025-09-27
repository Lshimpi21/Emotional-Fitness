import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your actual API URL

export const loginUser = async (emailOrPhone, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      emailOrPhone,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Signup failed');
  }
};

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to fetch user profile');
  }
};

export const updateUserProfile = async (userId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to update user profile');
  }
};