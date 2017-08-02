import {getTrendingGifsApi} from '../api/gifApi';

export function getTrendingGifs() {
    return dispatch => {
        getTrendingGifsApi().then(response => {
            dispatch({
                type : 'GET_ALL_GIFS',
                data : response.data
            });
        });

    };
}

export const gifsRefresh = () => ({
    type : 'REFRESH_GIFS',
});
