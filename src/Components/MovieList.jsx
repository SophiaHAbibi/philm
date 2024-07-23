import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApi();
  }, []);

  function getApi() {
    axios.get("https://moviesapi.ir/api/v1/movies?page=1")
      .then((response) => {
        setMovies(response.data.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the movies!", error);
      });
  }

  function renderMovies() {
    return movies.map((movie) => {
      const { poster, title, genres, id } = movie;
      return (
        <div key={id} className="flex flex-col relative xl:pl-[24px] w-1/4 mb-[50px]">
          <Link to={`/movies/${id}`}>
            <img src={poster} alt={title} className="" width={200} height={200} />
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="text-gray-600">{genres}</span> 
          </Link>
        </div>
      );
    });
  }

  return (
    <div>
      {loading ? "loading..." : (
        <div className="flex flex-wrap mx-auto my-auto items-center justify-between">
          {renderMovies()}
        </div>
      )}
    </div>
  );
};

export default MovieList;
