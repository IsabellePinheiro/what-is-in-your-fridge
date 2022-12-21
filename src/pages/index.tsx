import React from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";

export default function Home() {
  return (
    <div className="px-8 ">
      <Header />
      <SearchBar placeholder="TYPE YOUR INGREDIENTS HERE" />
    </div>
  );
}
