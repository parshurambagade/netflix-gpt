export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.TMDB_API_KEY
      }&include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
        query
      )}`,
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
    console.error("Error searching movies:", error);
    res.status(500).json({ error: "Failed to search movies" });
  }
}
