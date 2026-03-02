import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.language.lang);
  const searchText = useRef(null);
  return (
    <div className="pt-[15%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault}
        className="w-6/12 grid grid-cols-12 bg-black rounded-lg"
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
          className="p-4 m-4 col-span-9"
        />
        <button className="col-span-3 bg-red-500 text-white font-bold text-lg rounded-r-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
