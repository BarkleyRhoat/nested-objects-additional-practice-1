const { streamingLibrary } = require("./streamingLibrary.js");

console.log("streamingLibrary: ", streamingLibrary);

const genreNames = () => {
  return streamingLibrary.genres.map((g) => g.name);
};

const getShowTitlesByGenre = (genreName) => {
  const genre = streamingLibrary.genres.find((g) => g.name === genreName);
  return genre.shows.map((show) => show.title);
};

const getEpisodeTitlesByShow = (showTitle) => {
  const allShows = streamingLibrary.genres.map((g) => g.shows).flat();
  const show = allShows.find((s) => s.title === showTitle);
  return show.seasons
    .map((season) => season.episodes.map((episode) => episode.title))
    .flat();
};

const highRatedEpisodes = () => {
  const highRated = [];
  for (const genre of streamingLibrary.genres) {
    for (const show of genre.shows) {
      for (const season of show.seasons) {
        for (const episode of season.episodes) {
          if (episode.rating > 9) {
            highRated.push({
              episodeTitle: episode.title,
              rating: episode.rating,
            });
          }
        }
      }
    }
  }
  return highRated;
};

const totalEpisodes = () => {
  let count = 0;
  for (const genre of streamingLibrary.genres) {
    for (const show of genre.shows) {
      for (const season of show.seasons) {
        count += season.episodes.length;
      }
    }
  }
  return count;
};

const showsWithHighRatedEpisodes = () => {
  const showWithGoatedEpisode = [];
  for (const genre of streamingLibrary.genres) {
    for (const show of genre.shows) {
      for (const season of show.seasons) {
        for (const episode of season.episodes)
          if (
            episode.rating >= 9 &&
            !showWithGoatedEpisode.includes(show.title)
          ) {
            showWithGoatedEpisode.push(show.title);
          }
      }
    }
  }
  return showWithGoatedEpisode;
};

const getEpisodesByShowAndSeason = (showTitle, seasonNumber) => {
   
  const allShows = streamingLibrary.genres.map((g) => g.shows).flat();
  const show = allShows.find((s) => s.title === showTitle);
  const showSeasons = show.seasons.find((season) => season.seasonNumber === seasonNumber)
  return showSeasons.episodes.map((e) => e.title)
};

const addEpisode = () => {
  // Your code here
};

const getHighestRatedEpisode = () => {
  // Your code here
};

const getEpisodesSortedByRating = () => {
  // Your code here
};

const getAverageRatingForShow = () => {
  // Your code here
};

// ===================================================================================================
// The rest of this is required to allow the test script to find the functions you will define here.
// ===================================================================================================
module.exports = {
  genreNames,
  getShowTitlesByGenre,
  getEpisodeTitlesByShow,
  highRatedEpisodes,
  totalEpisodes,
  showsWithHighRatedEpisodes,
  getEpisodesByShowAndSeason,
  addEpisode,
  getHighestRatedEpisode,
  getEpisodesSortedByRating,
  getAverageRatingForShow,
};
