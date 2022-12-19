import React from "react";
import Button from "../components/button";
import Header from "../components/header";
import Recipe from "../components/recipe";

export default function Home() {
  return (
    <div className="px-8 ">
      <Header />
      <Recipe />
      <Button text="Search" />
    </div>
  );
}
