const API_KEY = "88180830";

export const getMovieByTitle = async (title) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("OMDb error:", error);
    return null;
  }
};