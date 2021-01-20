const API_KEY = 'eb12172ff79f290288b0fe4cd43c3dde';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchCommedyMovies: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_networks=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_networks=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default requests;