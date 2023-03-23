"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <p>Error</p>
      <button className="text-amber-500" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
