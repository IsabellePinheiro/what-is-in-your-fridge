import React from "react";
import Header from "../components/header";
import Recipe from "../components/recipe";

export default function Home() {
  return (
    <div className="px-8 ">
      <Header />
      <Recipe />
    </div>
  );
}
