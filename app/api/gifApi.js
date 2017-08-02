import axios from 'axios';

export const getTrendingGifsApi = () => {
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    return axios.get(url);
};
