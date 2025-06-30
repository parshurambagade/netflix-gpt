export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { movieId } = req.query;

  if (!movieId) {
    return res.status(400).json({ error: "Movie ID is required" });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.TMDB_API_KEY}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.TMDB_API_AUTHORIZATION_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from TMDB");
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching movie videos:", error);
    res.status(500).json({ error: "Failed to fetch movie videos" });
  }
}
