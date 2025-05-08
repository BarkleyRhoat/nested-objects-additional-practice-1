// streamingLibrary.js

const streamingLibrary = {
  genres: [
    {
      name: "Science Fiction",
      shows: [
        {
          title: "Galaxy Quest",
          seasons: [
            {
              seasonNumber: 1,
              episodes: [
                { episodeNumber: 1, title: "Pilot", rating: 8.5 },
                { episodeNumber: 2, title: "Into the Void", rating: 9.1 },
                { episodeNumber: 3, title: "The Wormhole", rating: 8.7 }
              ]
            },
            {
              seasonNumber: 2,
              episodes: [
                { episodeNumber: 1, title: "Return to Earth", rating: 9.3 },
                { episodeNumber: 2, title: "Final Frontier", rating: 9.0 }
              ]
            }
          ]
        },
        {
          title: "Star Voyagers",
          seasons: [
            {
              seasonNumber: 1,
              episodes: [
                { episodeNumber: 1, title: "First Contact", rating: 8.9 },
                { episodeNumber: 2, title: "Cosmic Storm", rating: 9.4 }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Comedy",
      shows: [
        {
          title: "Office Banter",
          seasons: [
            {
              seasonNumber: 1,
              episodes: [
                { episodeNumber: 1, title: "The New Guy", rating: 7.8 },
                { episodeNumber: 2, title: "Team Building", rating: 8.2 }
              ]
            },
            {
              seasonNumber: 2,
              episodes: [
                { episodeNumber: 1, title: "Holiday Party", rating: 8.6 },
                { episodeNumber: 2, title: "The Promotion", rating: 8.4 }
              ]
            }
          ]
        },
        {
          title: "Family Fiasco",
          seasons: [
            {
              seasonNumber: 1,
              episodes: [
                { episodeNumber: 1, title: "Moving Day", rating: 8.0 },
                { episodeNumber: 2, title: "Meet the Neighbors", rating: 7.9 }
              ]
            }
          ]
        }
      ]
    }
  ]
};

module.exports = streamingLibrary;
