const { expect } = require('chai');
const path = require('path');

const solutions = require(path.resolve(__dirname, '../index'));

describe('Streaming Library solutions', () => {
  it('Challenge 1: should list all genre names', () => {
    expect(solutions.genreNames).to.be.an('array');
    expect(solutions.genreNames).to.not.be.empty;
    expect(solutions.genreNames).to.include.members(['Science Fiction', 'Comedy']);
  });

  it('Challenge 2: should return correct shows for a given genre', () => {
    const titles = solutions.getShowTitlesByGenre('Science Fiction');
    expect(titles).to.include('Galaxy Quest');
  });

  it('Challenge 3: should return episode titles for a given show', () => {
    const episodes = solutions.getEpisodeTitlesByShow('Galaxy Quest');
    expect(episodes).to.include('Into the Void');
  });

  it('Challenge 4: should find episodes with rating > 9', () => {
    expect(solutions.highRatedEpisodes.some(ep => ep.rating > 9)).to.be.true;
  });

  it('Challenge 5: should count total number of episodes', () => {
    expect(solutions.totalEpisodes).to.be.a('number');
    expect(solutions.totalEpisodes).to.be.above(0);
  });

  it('Challenge 6: should find shows with episodes rated >= 9', () => {
    expect(solutions.showsWithHighRatedEpisodes.length).to.be.greaterThan(0);
  });

  it('Challenge 7: should list episodes from specific season of a show', () => {
    const episodes = solutions.getEpisodesByShowAndSeason('Galaxy Quest', 1);
    expect(episodes).to.include('The Wormhole');
  });

  // Bonus solutions
  it('Bonus 8: should add a new episode', () => {
    const newEp = { episodeNumber: 99, title: 'Bonus Episode', rating: 9.5 };
    solutions.addEpisode('Galaxy Quest', 1, newEp);
    const episodes = solutions.getEpisodesByShowAndSeason('Galaxy Quest', 1);
    expect(episodes).to.include('Bonus Episode');
  });

  it('Bonus 9: should find the highest-rated episode', () => {
    const highest = solutions.getHighestRatedEpisode();
    expect(highest.rating).to.be.greaterThan(0);
  });

  it('Bonus 10: should sort episodes of a show by rating', () => {
    const sorted = solutions.getEpisodesSortedByRating('Galaxy Quest');
    expect(sorted[0].rating).to.be.at.least(sorted[1].rating);
  });

  it('Bonus 11: should get average rating for a show', () => {
    const avg = solutions.getAverageRatingForShow('Galaxy Quest');
    expect(parseFloat(avg)).to.be.a('number');
    expect(parseFloat(avg)).to.be.above(0);
  });
});
