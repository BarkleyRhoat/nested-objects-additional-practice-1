const { streamingLibrary } = require("./streamingLibrary.js")

// Example usage of the streamingLibrary
console.log("streamingLibrary: ", streamingLibrary)

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
}
