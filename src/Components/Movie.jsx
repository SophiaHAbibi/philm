import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    axios.get(`https://moviesapi.ir/api/v1/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the movie!", error);
      });
  }, [id]);

  return (
    <div className="mt-[50px] w-full px-4 lg:px-[40px] z-[80]">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} width={200} height={200} />
      <p>{movie.genres}</p>
      <p>{movie.year}</p>
      <p>{movie.rated}</p>
      <p>{movie.released}</p>
      <p>{movie.runtime}</p>
      <p>{movie.director}</p>
      <p>{movie.writer}</p>
      <p>{movie.actors}</p>
      <p>{movie.plot}</p>
      <p>{movie.country}</p>
      <p>{movie.awards}</p>
      <p>{movie.metascore}</p>
      <p>{movie.imdb_rating}</p>
      <p>{movie.imdb_votes}</p>
      <p>{movie.imdb_id}</p>
      <p>{movie.genres}</p>
      <p>{movie.images}</p>
    </div>
  );
};

export default Movie;
