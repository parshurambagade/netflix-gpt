export const NETFLIX_BG = 'https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg';

export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_PIC = "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png";

export const API_OPTIONS  = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_TMDB_API_AUTHORIZATION_KEY
    }
  };

export const TMDB_NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?page=1"

export const MOVIE_VIDEOS = `https://api.themoviedb.org/3/movie/`