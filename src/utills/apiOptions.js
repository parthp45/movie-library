import { MOVIE_ACCESS_TOKEN } from "./constants";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${MOVIE_ACCESS_TOKEN}`,
  },
};

export { options };
