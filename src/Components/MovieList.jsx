import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

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
    return (
      <>
        <form className="mb-4">
          <input
            type="text" 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search for movies..." 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          />
        </form>
        <div className="flex flex-wrap mx-auto my-auto items-center justify-between">
          {movies.filter((item) => {
            const searchLower = search.toLowerCase();
            return searchLower === '' || 
              item.title.toLowerCase().includes(searchLower) || 
              item.genres.some(genre => genre.toLowerCase().includes(searchLower));
          }).map((movie) => {
            const { poster, title, genres, id } = movie;
            return (
              <div key={id} className="flex flex-col relative xl:pl-[24px] w-1/4 mb-[50px]">
                <Link to={`/movies/${id}`}>
                  <img src={poster} alt={title} className="" width={200} height={200} />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <span className="text-gray-600">{genres.join(", ")}</span> 
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <div>
      {loading ? "Loading..." : renderMovies()}
    </div>
  );
};

export default MovieList;
