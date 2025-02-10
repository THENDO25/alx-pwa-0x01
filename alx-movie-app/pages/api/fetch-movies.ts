import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    try {
      const { year, page, genre } = request.body;
      const date = new Date();
      const resp = await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?year=${
          year || date.getFullYear()
        }&sort=year.decr&limit=12&page=${page}&${genre && `genre=${genre}`}`,
        {
          headers: {
            "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.MOVIE_API_KEY}`,
          },
        }
      );

      if (!resp.ok) {
        throw new Error(`Failed to fetch movies: ${resp.status} ${resp.statusText}`);
      }

      const moviesResponse = await resp.json();
      const movies: MoviesProps[] = moviesResponse.results;

      return response.status(200).json({
        movies,
      });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Failed to fetch movies' });
    }
  } else {
    response.setHeader("Allow", ["POST"]);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
}