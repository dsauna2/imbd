"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const setSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <div>
      <form
        onSubmit={(e) => setSubmit(e)}
        className="flex max-w-6xl mx-auto my-4 justify-between"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full bg-transparent h-10 outline-none"
        />
        <button className="text-amber-600" disabled={!search}>
          Search
        </button>
      </form>
    </div>
  );
}
