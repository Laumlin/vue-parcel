import http from '../../api'

export default {
	state: {
		movies: []
	},
	mutations: {
		getMovies (state, movies) {
			state.movies = movies
		}
	},
	actions: {
		getMovies ({state, commit}) {
			return http.get('http://api.douban.com/v2/movie/top250')
		}
	}
}