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

  if (!res.ok) {
    throw new Error("error validationg");
  }

  const data = await res.json();

  return (
    <h1 className="text-red-400">
      <Results results={data.results} />
    </h1>
  );
}
