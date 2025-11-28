import axios from 'axios';

// const API_URL = 'https://your-heroku-app.herokuapp.com/api';

const API_URL = 'http://localhost:5000/api';

export const getCourses = () => axios.get(`${API_URL}/courses`);
export const uploadDocument = (formData) => axios.post(`${API_URL}/documents/upload`, formData);
export const summariseDocument = (docId) => axios.get(`${API_URL}/documents/summarise/${docId}`);
