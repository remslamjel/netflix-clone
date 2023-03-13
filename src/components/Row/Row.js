import React from "react";
import axios from "../../axios";
import { useEffect, useState } from "react";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeImage }) => {
  const [movies, setMovies] = useState([]);
  const [movieUrl, setMovieUrl] = useState("");

  // fetching the movies

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    };
    getData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // on movie image click

  const handleClick = (movie) => {
    if (movieUrl) {
      setMovieUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://www.youtube.com/watch?v=3YWaSYcNDAA
          console.log("URL", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setMovieUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__image__container">
        {movies &&
          movies.map((movie) => {
            return (
              <img
                key={movie.id}
                src={`${base_url}${
                  isLargeImage ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
                className={`row__image ${isLargeImage && "row__image__large"}`}
              />
            );
          })}
      </div>
      {movieUrl && <YouTube videoId={movieUrl} opts={opts} />}
    </div>
  );
};

export default Row;
