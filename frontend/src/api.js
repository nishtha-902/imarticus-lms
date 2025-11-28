import axios from 'axios';

const API_URL = 'https://learning-management-system-rqm4.onrender.com';

export const getCourses = () => axios.get(`${API_URL}/courses`);
export const uploadDocument = (formData) => axios.post(`${API_URL}/documents/upload`, formData);
export const summariseDocument = (docId) => axios.get(`${API_URL}/documents/summarise/${docId}`);
