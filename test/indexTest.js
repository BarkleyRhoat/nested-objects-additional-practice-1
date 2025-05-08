const { expect } = require('chai');
const path = require('path');

const streamingLibrary = require(path.resolve(__dirname, '../streamingLibrary'));
const challenges = require(path.resolve(__dirname, '../index'));

describe('Streaming Library Challenges', () => {
  it('Challenge 1: should list all genre names', () => {
    const genreNames = streamingLibrary.genres.map(g => g.name);
    expect(genreNames).to.include.members(['Science Fiction', 'Drama']); // Example genres
  });

  it('Challenge 2: should return correct shows for a given genre', () => {
    const titles = challenges.getShowTitlesByGenre('Science Fiction');
    expect(titles).to.include('Galaxy Quest');
  });

  it('Challenge 3: should return episode titles for a given show', () => {
    const episodes = challenges.getEpisodeTitlesByShow('Galaxy Quest');
    expect(episodes).to.include('The Beginning');
  });

  it('Challenge 4: should find episodes with rating > 9', () => {
    const result = challenges.findHighRatedEpisodes();
    expect(result.some(ep => ep.rating > 9)).to.be.true;
  });

  it('Challenge 5: should count total number of episodes', () => {
    const count = challenges.countTotalEpisodes();
    expect(count).to.be.a('number');
    expect(count).to.be.above(0);
  });

  it('Challenge 6: should find shows with episodes rated >= 9', () => {
    const shows = challenges.findShowsWithHighRatedEpisodes();
    expect(shows.length).to.be.greaterThan(0);
  });

  it('Challenge 7: should list episodes from specific season of a show', () => {
    const episodes = challenges.getEpisodesByShowAndSeason('Galaxy Quest', 1);
    expect(episodes).to.include('The Beginning');
  });

  // Bonus Challenges
  it('Bonus 8: should add a new episode', () => {
    const newEp = { episodeNumber: 99, title: 'Bonus Episode', rating: 9.5 };
    challenges.addEpisode('Galaxy Quest', 1, newEp);
    const episodes = challenges.getEpisodesByShowAndSeason('Galaxy Quest', 1);
    expect(episodes).to.include('Bonus Episode');
  });

  it('Bonus 9: should find the highest-rated episode', () => {
    const highest = challenges.getHighestRatedEpisode();
    expect(highest.rating).to.be.greaterThan(0);
  });

  it('Bonus 10: should sort episodes of a show by rating', () => {
    const sorted = challenges.getEpisodesSortedByRating('Galaxy Quest');
    expect(sorted[0].rating).to.be.at.least(sorted[1].rating);
  });

  it('Bonus 11: should get average rating for a show', () => {
    const avg = challenges.getAverageRatingForShow('Galaxy Quest');
    expect(parseFloat(avg)).to.be.a('number');
    expect(avg).to.be.above(0);
  });
});
