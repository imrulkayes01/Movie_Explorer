/**
 * Composable for movie API calls (JavaScript)
 */
export const useMovieApi = () => {
  const { movieApiKey, movieApiBaseUrl, isApiKeySet } = useEnv();

  const searchMovies = async (query) => {
    if (!query || !query.trim()) {
      return null;
    }

    if (!isApiKeySet()) {
      console.error(
        "Movie API key is not set. Please add NUXT_PUBLIC_MOVIE_API_KEY to your .env file"
      );
      return null;
    }

    try {
      const url = `${movieApiBaseUrl}/search/movie?api_key=${movieApiKey}&query=${encodeURIComponent(
        query
      )}&language=en-US&page=1`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error searching movies:", error);
      return null;
    }
  };

  const getMoviePosterUrl = (posterPath) => {
    if (!posterPath) {
      return "/placeholder-movie.jpg";
    }
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  return {
    searchMovies,
    getMoviePosterUrl,
    isApiKeySet,
  };
};
