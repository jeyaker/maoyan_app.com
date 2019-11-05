import axios from 'axios';

const GET_MOVIES = 'GET_MOVIES';
const GET_COMING_MOVIES = 'GET_COMING_MOVIES';

export default {
    state: {
        movies: null,
        flag: false
    },
    actions: {
        getMovies({
            commit
        }) {
            axios({
                url: '/ajax/movieOnInfoList',
                params: {
                    token: ''
                }
            }).then(res => {
                commit({
                    type: GET_MOVIES,
                    payload: res.data
                });
            }).catch(err =>
                console.log(err)
            )
        },
        getComingMovies({
            commit
        }, movieIds) {
            axios({
                url: '/ajax/moreComingList',
                params: {
                    token: '',
                    movieIds
                }
            }).then(res => {
                commit({
                    type: GET_COMING_MOVIES,
                    payload: res.data
                });
            }).catch(err => console.log(err));
        }
    },
    mutations: {
        GET_MOVIES(state, action) {
            // console.log(action.payload);
            state.movies = action.payload;
        },
        GET_COMING_MOVIES(state, action) {
            // console.log(action.payload.coming);
            state.movies.movieList.push(...action.payload.coming);
        }
    }
};