import React from "react";
import Button from "../components/button";
import Header from "../components/header";
import SearchBar from "../components/searchBar";

export default function Home() {
  return (
    <div className="px-8 ">
      <Header />
      <SearchBar />
      <Button>SEARCH</Button>
    </div>
  );
}
