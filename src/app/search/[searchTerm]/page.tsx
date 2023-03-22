import Results from "@/app/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const movieRaw = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const movies = await movieRaw.json();
  return (
    <div>
      {movies.results && movies.results.length > 0 && <>No results Found</>}
      {movies && <Results results={movies} />}
    </div>
  );
}
