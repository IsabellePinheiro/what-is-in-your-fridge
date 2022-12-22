import React, { useCallback, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setValue(event.target.value);
    },
    []
  );

  return (
    <input
      className="flex w-full mt-4 px-6 py-4 rounded bg-gray-300 border border-gray-600 text-sm text-gray-900"
      type="text"
      value={value}
      onChange={handleChangeInput}
      placeholder="TYPE YOUR INGREDIENTS HERE"
    />
  );
}
