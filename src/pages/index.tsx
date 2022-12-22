import React from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";

export default function Home() {
  return (
    <div className="px-8 ">
      <Header />
      <SearchBar />
    </div>
  );
}
