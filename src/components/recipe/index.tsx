import React from "react";
import Image from "next/image";

import recipe from "../../assets/fudge.webp";

/** TODO: Populate data from spoonacular api */

export default function Recipe() {
  return (
    <main className="flex p-4 flex-row bg-gray-300 border border-gray-400 transition ease-in-out delay-150 hover:border-gray-900 max-w-max hover:cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
      <Image
        quality={100}
        width={200}
        height={200}
        src={recipe}
        alt="Recipe"
        className="mr-4"
      />
      <div className="max-w-[300px]">
        <span className="text-gray-600 text-1xl font-bold leading-tight">
          MILK CHOCOLATE
        </span>
        <h2 className="text-gray-800 text-2xl font-bold leading-tight mt-4 mb-2">
          Creamy Chocolate Fudge
        </h2>
        <span className="text-gray-500 text-base leading-tight">
          Ready to make the best fudge of your life? You've come to the right
          place! You'll come back to this creamy fudge recipe again and again.
        </span>
      </div>
    </main>
  );
}
