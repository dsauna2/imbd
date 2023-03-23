// Fix the problem for "search params object is empty in production with next 13 app dir"

// for more info "https://github.com/vercel/next.js/issues/43077"

export const dynamic = "force-dynamic"; // this is the fix

import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

type GENRE = "fetchTrending" | "fetchTopRated";

interface HomeProps {
  searchParams: SearchParams;
}
interface SearchParams {
  genre: GENRE;
}

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  return (
    <div className="mt-3">
      <Results results={data.results} />
    </div>
  );
}
