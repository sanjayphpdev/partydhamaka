"use client";
import { useState } from "react";

export default function Gallery({ media }: any) {
  const [active, setActive] = useState(media[0]);

  return (
    <>
      {/* Main */}
      <div className="w-full max-h-[500px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        {active.type === "image" ? (
          <img
            src={active.url}
            className="w-full h-full object-contain"
            alt="decoration"
          />
        ) : (
          <video
            src={active.url}
            className="w-full h-full object-contain"
            controls
            autoPlay
            loop
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3 overflow-x-auto">
        {media.map((m: any, i: number) => (
          <div
            key={i}
            onClick={() => setActive(m)}
            className={`w-20 h-20 cursor-pointer rounded overflow-hidden border ${
              active.url === m.url ? "border-pink-500" : ""
            }`}
          >
            {m.type === "image" ? (
              <img src={m.url} className="w-full h-full object-cover" />
            ) : (
              <video src={m.url} className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
