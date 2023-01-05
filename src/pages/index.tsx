import React, { useState } from "react";
import { useAtom } from "jotai";
import Button from "../components/button";
import Header from "../components/header";
import SearchBar, { searchAtom } from "../components/searchBar";
import * as api from "../services/api";
import Recipe from "../components/recipe";

interface RecipeResult {
  id: number;
  title: string;
  image: string;
  cuisines: string[];
  summary: string;
}

export default function Home() {
  const [searchRecipesResult] = useAtom(searchAtom);
  const [recipes, setRecipes] = useState<RecipeResult[]>([]);

  async function handleSearchRecipes() {
    if (searchRecipesResult.length) {
      try {
        const formattedIngredientsUrl = searchRecipesResult
          .map(
            (ingredient, index) => `${index > 0 ? "+" : ""}${ingredient.name}`
          )
          .join(`,`);

        const response = await api.searchRecipesByIngredients(
          formattedIngredientsUrl
        );
        setRecipes(response);
        return;
      } catch (error) {
        alert((error as Error).message);
      }
    }
    try {
      const response = await api.getRandomRecipes();
      setRecipes(response);
    } catch (error) {
      alert((error as Error).message);
    }
  }

  return (
    <div className="px-8 ">
      <Header />
      <SearchBar />
      <Button onClick={() => handleSearchRecipes()}>SEARCH</Button>

      <div className="grid gap-x-8 gap-y-4 grid-cols-3">
        {recipes?.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            cuisines={recipe.cuisines}
            summary={recipe.summary}
          />
        ))}
      </div>
    </div>
  );
}
