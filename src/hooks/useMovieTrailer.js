import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ videoId }) => {
  //   fetching the trailer video and updating the store
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const fetchTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + videoId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    // This trailer video is a concept of memoization, that says the API call should be made only if the store is empty
    !trailerVideo && fetchTrailer();
  }, []);
};

export default useMovieTrailer;
