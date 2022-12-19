import React from "react";
import Header from "../components/header";
import Recipe from "../components/recipe";
import SearchBar from "../components/searchBar";

export default function Home() {
  return (
    <div className="px-8 ">
      <Header />
      <Recipe />
      <SearchBar placeholder='TYPE YOUR INGREDIENTS HERE'/>
    </div>
  );
}
