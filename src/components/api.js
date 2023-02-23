import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '33880709-3dd4abfa0685ad9cf85dfb0e7';

export const fetchPictureByHits = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};