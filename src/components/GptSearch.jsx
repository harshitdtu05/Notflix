import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BGM } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img className="-z-10 fixed" alt="bgm" src={BGM} />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
