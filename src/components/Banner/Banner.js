import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../requests";

const Banner = () => {
  const [movie, setMovie] = useState();

  function truncateString(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const index = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setMovie(response.data.results[index]);
    };

    getData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncateString(movie?.overview, 140)}
        </h1>
      </div>
      <div className="banner__bottomFade" />
    </header>
  );
};

export default Banner;
