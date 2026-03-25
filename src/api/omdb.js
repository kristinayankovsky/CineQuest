const API_KEY = "88180830";

// ✅ search by title (USED IN HOMEPAGE)
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

// ✅ get by ID (USED IN MOVIE DETAILS)
export const getMovieById = async (id) => {
  try {
    // 🛑 prevent bad calls
    if (!id || id === "undefined") {
      console.warn("Invalid ID:", id);
      return null;
    }

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("OMDb error:", error);
    return null;
  }
};