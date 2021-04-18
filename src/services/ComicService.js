
import apiClient from '../plugins/Axios';

const getRandomComic = function (comicNumber) {
  return apiClient.get(`/${comicNumber}/info.0.json`);
}

export default {
  getRandomComic,
};
