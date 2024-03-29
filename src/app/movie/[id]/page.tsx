import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const API_KEY = process.env.API_KEY;

function formatNumber(number: number) {
  if (number >= 1000000) {
    return Math.round(number / 1000000) + "m";
  } else if (number >= 1000) {
    return Math.round(number / 1000) + "k";
  } else {
    return number;
  }
}

//@ts-ignore
export default async function page({ params }) {
  const movieId = params.id;
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const result = await movie.json();
  return (
    <div className="w-full">
      <div className="max-w-6xl flex mx-auto mt-5 sm:flex-col md:flex-row items-top content-center md:space-x-6">
        <Image
          className="group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="spinner.svg"
          alt="image"
          width="500"
          height="300"
          src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
        ></Image>
        <div>
          <h2 className="text-xl mb-2 text-amber-600">{result.title}</h2>
          <p className="mb-2">{result.overview}</p>
          <p className=" text-green-600">
            Revenue: ${formatNumber(result.revenue)}
          </p>
          <p className="text- text-red-400">
            Budget: ${formatNumber(result.budget)}
          </p>
        </div>
      </div>
    </div>
  );
}
