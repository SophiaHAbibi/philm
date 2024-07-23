// src/Components/Home.js

import React from "react";
import MovieList from "./MovieList";
import ImageCarousel from "./slider";

const Home = () => {
  return <div className="mt-[50px] w-full px-4 lg:px-[40px] z-[80]">
     <ImageCarousel />
    <MovieList />
  </div>;
};

export default Home;
