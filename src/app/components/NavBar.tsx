"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavBar() {
  const params = useSearchParams();
  const genre = params.get("genre");
  return (
    <div className="text-center bg-gray-400 py-5 font-semibold ">
      <Link
        href="/?genre=fetchTrending"
        className={`text-white pr-5 hover:text-amber-200 ${
          genre && genre === "fetchTrending"
            ? "underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg"
            : ""
        }`}
      >
        {" "}
        Trending
      </Link>
      <Link
        href="/?genre=fetchTopRated"
        className={`text-white hover:text-amber-200 ${
          genre && genre === "fetchTopRated"
            ? "underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg"
            : ""
        }`}
      >
        {" "}
        Top Rated
      </Link>
    </div>
  );
}
