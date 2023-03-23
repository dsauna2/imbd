import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MovieInfo } from "./Results";

interface ResultType {
  result: MovieInfo;
}

export default function Card({ result }: ResultType) {
  return (
    <div className="sm:border sm:p-3 sm:m-2 cursor-pointer sm:hover:shadow-slate-200 sm:hover:shadow-sm group">
      <Link href={`movie/${result.id}`}>
        <Image
          className="group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="spinner.svg"
          alt="image"
          width="500"
          height="300"
          src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
        ></Image>
        <h2 className="my-2">{result.title}</h2>
        <p className="line-clamp-3 text-sm my-3">{result.overview}</p>
      </Link>
    </div>
  );
}
