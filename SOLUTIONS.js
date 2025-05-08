// solutions.js
// Example solutions to all challenges

const streamingLibrary = require('./streamingLibrary');

// Challenge 1: List all genre names
const genreNames = streamingLibrary.genres.map(genre => genre.name);
console.log('Challenge 1:', genreNames);

// Challenge 2: List all show titles in a given genre
function getShowTitlesByGenre(genreName) {
  const genre = streamingLibrary.genres.find(g => g.name === genreName);
  return genre ? genre.shows.map(show => show.title) : [];
}
console.log('Challenge 2:', getShowTitlesByGenre('Science Fiction'));

// Challenge 3: List all episode titles for a given show
function getEpisodeTitlesByShow(showTitle) {
  const shows = streamingLibrary.genres.flatMap(genre => genre.shows);
  const show = shows.find(s => s.title === showTitle);
  if (!show) return [];
  return show.seasons.flatMap(season => season.episodes.map(ep => ep.title));
}
console.log('Challenge 3:', getEpisodeTitlesByShow('Galaxy Quest'));

// Challenge 4: Find all episodes with a rating above 9
const highRatedEpisodes = streamingLibrary.genres.flatMap(genre =>
  genre.shows.flatMap(show =>
    show.seasons.flatMap(season =>
      season.episodes
        .filter(ep => ep.rating > 9)
        .map(ep => ({ showTitle: show.title, episodeTitle: ep.title, rating: ep.rating }))
    )
  )
);
console.log('Challenge 4:', highRatedEpisodes);

// Challenge 5: Count total number of episodes in the entire library
const totalEpisodes = streamingLibrary.genres.reduce((acc, genre) => {
  return acc + genre.shows.reduce((acc2, show) => {
    return acc2 + show.seasons.reduce((acc3, season) => acc3 + season.episodes.length, 0);
  }, 0);
}, 0);
console.log('Challenge 5:', totalEpisodes);

// Challenge 6: Find all shows with at least one episode rated 9 or higher
const showsWithHighRatedEpisodes = streamingLibrary.genres.flatMap(genre =>
  genre.shows.filter(show =>
    show.seasons.some(season =>
      season.episodes.some(ep => ep.rating >= 9)
    )
  ).map(show => show.title)
);
console.log('Challenge 6:', showsWithHighRatedEpisodes);

// Challenge 7: List all episodes from a specific season of a show
function getEpisodesByShowAndSeason(showTitle, seasonNumber) {
  const shows = streamingLibrary.genres.flatMap(genre => genre.shows);
  const show = shows.find(s => s.title === showTitle);
  if (!show) return [];
  const season = show.seasons.find(season => season.seasonNumber === seasonNumber);
  return season ? season.episodes.map(ep => ep.title) : [];
}
console.log('Challenge 7:', getEpisodesByShowAndSeason('Galaxy Quest', 1));

// Bonus Challenge 8: Add a new episode
function addEpisode(showTitle, seasonNumber, episodeObject) {
  const shows = streamingLibrary.genres.flatMap(genre => genre.shows);
  const show = shows.find(s => s.title === showTitle);
  if (!show) return;
  const season = show.seasons.find(s => s.seasonNumber === seasonNumber);
  if (season) {
    season.episodes.push(episodeObject);
  }
}
addEpisode('Galaxy Quest', 1, { episodeNumber: 3, title: 'New Adventure', rating: 9.3 });
console.log('Bonus 8:', getEpisodesByShowAndSeason('Galaxy Quest', 1));

// Bonus Challenge 9: Find the highest-rated episode in the library
function getHighestRatedEpisode() {
  let highest = null;
  streamingLibrary.genres.forEach(genre => {
    genre.shows.forEach(show => {
      show.seasons.forEach(season => {
        season.episodes.forEach(ep => {
          if (!highest || ep.rating > highest.rating) {
            highest = { showTitle: show.title, seasonNumber: season.seasonNumber, episodeTitle: ep.title, rating: ep.rating };
          }
        });
      });
    });
  });
  return highest;
}
console.log('Bonus 9:', getHighestRatedEpisode());

// Bonus Challenge 10: Sort all episodes of a show by rating (highest to lowest)
function getEpisodesSortedByRating(showTitle) {
  const shows = streamingLibrary.genres.flatMap(genre => genre.shows);
  const show = shows.find(s => s.title === showTitle);
  if (!show) return [];
  return show.seasons.flatMap(season => season.episodes)
    .sort((a, b) => b.rating - a.rating);
}
console.log('Bonus 10:', getEpisodesSortedByRating('Galaxy Quest'));

// Bonus Challenge 11: Get the average episode rating for a show
function getAverageRatingForShow(showTitle) {
  const shows = streamingLibrary.genres.flatMap(genre => genre.shows);
  const show = shows.find(s => s.title === showTitle);
  if (!show) return 0;
  const episodes = show.seasons.flatMap(season => season.episodes);
  const total = episodes.reduce((sum, ep) => sum + ep.rating, 0);
  return episodes.length ? (total / episodes.length).toFixed(2) : 0;
}
console.log('Bonus 11:', getAverageRatingForShow('Galaxy Quest'));
