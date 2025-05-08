// index.js
// Your solutions go here!

// The below imports the streamingLibrary object from the streamingLibrary.js file.
// Use it like any other object
const streamingLibrary = require('./streamingLibrary');

// Run 'npm test' to see your progress.

// Challenge 1: List all genre names
// TODO: Write code here to create genreNames array
const genreNames = streamingLibrary.genres.map(genre => genre.name);


// Challenge 2: List all show titles in a given genre
// TODO: Write function getShowTitlesByGenre(genreName)


// Challenge 3: List all episode titles for a given show
// TODO: Write function getEpisodeTitlesByShow(showTitle)


// Challenge 4: Find all episodes with a rating above 9
// TODO: Write code here to create highRatedEpisodes array


// Challenge 5: Count total number of episodes in the entire library
// TODO: Write code here to create totalEpisodes number


// Challenge 6: Find all shows with at least one episode rated 9 or higher
// TODO: Write code here to create array called showsWithHighRatedEpisodes


// Challenge 7: List all episodes from a specific season of a show
// TODO: Write function getEpisodesByShowAndSeason(showTitle, seasonNumber)


// --- BONUS CHALLENGES ---

// Bonus Challenge 8: Add a new episode
// TODO: Write function addEpisode(showTitle, seasonNumber, episodeObject)


// Bonus Challenge 9: Find the highest-rated episode in the library
// TODO: Write function getHighestRatedEpisode()


// Bonus Challenge 10: Sort all episodes of a show by rating (highest to lowest)
// TODO: Write function getEpisodesSortedByRating(showTitle)


// Bonus Challenge 11: Get the average episode rating for a show
// TODO: Write function getAverageRatingForShow(showTitle)


// --- Feel free to add console.logs to test your functions below ---
