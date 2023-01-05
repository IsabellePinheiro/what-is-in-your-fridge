import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getIngredients = (searchQuery: string) =>
  api
    .get(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=${searchQuery}&number=10`
    )
    .then((res) => res.data);

export const getRandomRecipes = () =>
  api
    .get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&number=6`
    )
    .then((res) => res.data.recipes);

export const searchRecipesByIngredients = (ingredients: string) =>
  api
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&ingredients=${ingredients}&number=6`
    )
    .then((res) => res.data);
