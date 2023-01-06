import React, { useCallback, useState } from "react"

interface IngredientProps {
  id: number
  name: string
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [ingredients, setIngredients] = useState<IngredientProps[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientProps[]
  >([])

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSearchQuery(event.target.value)
      fetch(
        `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=${event.target.value}&number=10&metaInformation=true`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          setIngredients(result)
        })
    },
    []
  )

  const handleSelectIngredient = useCallback(
    (ingredient: IngredientProps) => {
      if (
        selectedIngredients.some(
          (selected) => selected.name === ingredient.name
        )
      ) {
        alert("Ingredient already selected. Please, choose another one.")
        return
      }
      setSelectedIngredients((prev) => [
        ...prev,
        {
          ...ingredient,
        },
      ])
    },
    [selectedIngredients]
  )

  const handleDeleteIngredient = useCallback((index: number) => {
    setSelectedIngredients((prev) => prev.filter((item) => item.id !== index))
  }, [])

  return (
    <>
      <input
        className="flex w-full mt-4 px-6 py-4 rounded bg-gray-300 border border-gray-600 text-sm text-gray-900"
        type="text"
        value={searchQuery}
        onChange={handleChangeInput}
        placeholder="TYPE YOUR INGREDIENTS HERE"
      />
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((item) => (
            <li
              key={item.id}
              className="bg-teal-100 h-8 cursor-pointer"
              onClick={() => handleSelectIngredient(item)}
            >
              <strong className="px-2 py-4 text-teal-600 hover:text-teal-900">
                {item.name}
              </strong>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-row my-3">
        {selectedIngredients.map((ingredient) => (
          <div
            key={ingredient.id}
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
  )
}
