import React from "react";

interface IButton {
  text: string;
}

export default function Button({ text }: IButton) {
  return (
    <button
      className="bg-gray-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
      type="submit"
    >
      {text}
    </button>
  );
}
