import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.language.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const HandleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest me some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the Example Results given ahead. Example Result: Superman, Ironman, The Dark Knight, Sholay";
    // Make an API call to GPT api and get movie recommendations
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();

    const gptMovies = text.split(",");

    // this gives an array of promises, but we need to wait until all of them get resolved
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

    // this can be done using promise.all
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-6/12 grid grid-cols-12 bg-black rounded-lg"
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg"
        />
        <button
          className="col-span-3 bg-red-500 text-white font-bold text-lg rounded-r-lg"
          onClick={HandleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
