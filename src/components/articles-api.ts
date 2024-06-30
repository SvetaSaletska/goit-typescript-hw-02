import axios from 'axios';
import { Image } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com';

interface ResponseData {
  results: Image[];
}

export const fetchImages = async (
  query: string,
  page: number,
): Promise<Image[]> => {
  console.log(query);
  const response = await axios.get<ResponseData>('/search/photos', {
    params: {
      client_id: 'czbUvZULGNNC7UsIcW08Kp2aJWei_H3EibNIqCy4xjg',
      query,
      page,
      hitsPerPage: 12,
      orientation: 'landscape',
    },
  });
  return response.data.results;
};
