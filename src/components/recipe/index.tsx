import Image from "next/image";
import React from "react";

interface RecipeProps {
  title: string;
  image: string;
  cuisines: string[];
  summary: string;
}

export default function Recipe({
  title,
  image,
  cuisines,
  summary,
}: RecipeProps) {

  return (
    <main className={`flex p-4 mt-4 ${summary ? 'flex-row' : 'flex-col'} bg-gray-300 border border-gray-400 transition ease-in-out delay-150 hover:border-gray-900  hover:cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300`}>
      <Image
        quality={100}
        width={200}
        height={200}
        src={image}
        alt={title}
        className="mr-4 w-auto h-auto"
      />
      {summary ? (
        <div className="max-w-[300px]">
          <span className="text-gray-600 text-1xl font-bold leading-tight">
            {cuisines?.[0]}
          </span>
          <h2 className="text-gray-800 text-2xl font-bold leading-tight mt-4 mb-2">
            {title}
          </h2>
          <span
            dangerouslySetInnerHTML={{
              __html: summary?.substring(0, 150).concat("..."),
            }}
            className="text-gray-500 text-base leading-tight"
          />
        </div>
      ) : (
        <h2 className="text-gray-800 text-2xl font-bold leading-tight mt-4 mb-2">
          {title}
        </h2>
      )}
    </main>
  );
}
