import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utills/apiOptions";
import { addVideoInfoById } from "../utills/videoSlice";

const useVideoInfo = (videoId) => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.videoInfo);

  const getVideoInfoById = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
      options
    );
    const response = await res.json();
    const filterData = response?.results?.filter(
      (item) => item.type === "Trailer"
    );
    const trailerData = filterData?.length
      ? filterData[0]
      : response?.results[0];
    dispatch(addVideoInfoById(trailerData));
  };
  useEffect(() => {
    if (!videoData) {
      getVideoInfoById();
    }
  }, []);
};
export default useVideoInfo;
