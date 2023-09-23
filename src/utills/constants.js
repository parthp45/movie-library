const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const EMAIL_REGEX = new RegExp(
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
);
const PASSWORD_REGEX = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

const MOVIE_API_KEY = process.env.REACT_APP_API_KEY;

const MOVIE_ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const MOVIE_IMG_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export {
  BG_IMG,
  EMAIL_REGEX,
  MOVIE_ACCESS_TOKEN,
  MOVIE_API_KEY,
  MOVIE_IMG_BASE_URL,
  PASSWORD_REGEX,
};
