import { API_OPTIONS, TMDB_MOVIE_CREDITS } from "../src/utils/constants";

export default async function handler(req, res) {
  const { movieId } = req.query;

  if (!movieId) {
    return res.status(400).json({ error: "Movie ID is required" });
  }

  try {
    const response = await fetch(
      `${TMDB_MOVIE_CREDITS}${movieId}/credits?language=en-US&api_key=${process.env.TMDB_API_KEY}`,
      API_OPTIONS
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from TMDB");
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    res.status(500).json({ error: "Failed to fetch movie credits" });
  }
}
