import React from "react";
import Card from "./Card";

export interface MovieInfo {
  id: string;
  backdrop_path: string;
  overview: string;
  title: string;
}
interface ResultsProps {
  results: MovieInfo[];
}

export default function Results({ results }: ResultsProps) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto">
      {results.map((result) => (
        <Card result={result} key={result.id}></Card>
      ))}
    </div>
  );
}
