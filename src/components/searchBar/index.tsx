import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";
import * as api from "../../services/api";

export interface SearchResultListProps {
  id: number;
  name: string;
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIngredientsList, setSelectedIngredientsList] = useState<
    SearchResultListProps[]
  >([]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    // refetch();
  };

  async function getIngredients(searchQuery: string) {
    try {
      const response = await api.getIngredients(searchQuery);
      return response;
    } catch (error) {
      alert((error as Error).message);
    }
  }

  const { isLoading, error, data } = useQuery(
    ["ingredients", searchQuery],
    () => getIngredients(searchQuery)
  );

  const handleSelectIngredient = useCallback(
    (ingredient: SearchResultListProps) => {
      setSelectedIngredientsList((current) => [
        ...current,
        {
          ...ingredient,
          id: new Date().getTime(),
        },
      ]);
    },
    []
  );

  const handleDeleteIngredient = useCallback((index: number) => {
    setSelectedIngredientsList((prevState) =>
      prevState.filter((item) => item.id !== index)
    );
  }, []);

  return (
    <>
      <input
        className="flex w-full mt-4 px-6 py-4 rounded bg-gray-300 border border-gray-600 text-sm text-gray-900"
        type="text"
        value={searchQuery}
        onChange={handleChangeInput}
        placeholder="TYPE YOUR INGREDIENTS HERE"
      />
      {isLoading && (
        <strong className="px-2 py-4  text-teal-600 hover:text-teal-900">
          Loading
        </strong>
      )}
      {error && (
        <strong className="px-2 py-4  text-teal-600 hover:text-teal-900">
          Error
        </strong>
      )}
      {data && searchQuery && (
        <ul>
          {data?.map((item: SearchResultListProps, index: React.Key) => (
            <li
              key={index}
              className="bg-teal-100 h-8 cursor-pointer"
              onClick={() => handleSelectIngredient(item)}
            >
              <strong className="px-2 py-4  text-teal-600 hover:text-teal-900">
                {item.name}
              </strong>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-row my-3">
        {selectedIngredientsList.map((ingredient, index) => (
          <div
            key={index}
            className="bg-green-100 w-fit border border-gray-600 p-1 mr-3"
          >
            <span>{ingredient.name}</span>
            <button
              className="bg-gray-100 cursor-pointer w-fit border border-gray-600 p-1 ml-2"
              onClick={() => handleDeleteIngredient(ingredient.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
