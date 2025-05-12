require("./helpers.js")

const {
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
} = require("../index.js")

describe("Streaming Library solutions", () => {
  it("genreNames should list all genre names", () => {
    const names = genreNames()
    expect(names).to.be.an("array")
    expect(names).to.not.be.empty
    expect(names).to.include.members(["Science Fiction", "Comedy"])
  })

  it("getShowTitlesByGenre should return correct shows for a given genre", () => {
    const titles = getShowTitlesByGenre("Science Fiction")
    expect(titles).to.include.members(['Galaxy Quest', 'Star Voyagers'])
  })

  it("getEpisodeTitlesByShow should return episode titles for a given show", () => {
    const episodes = getEpisodeTitlesByShow("Galaxy Quest")
    expect(episodes).to.include.members(["Pilot", "Into the Void", "The Wormhole", "Return to Earth", "Final Frontier"])
  })

  it("highRatedEpisodes should find episodes with rating > 9", () => {
    expect(highRatedEpisodes.find((ep) => ep.rating < 9)).to.equal(undefined)
    expect(highRatedEpisodes.length).to.equal(3)
  })

  it("totalEpisodes should count total number of episodes", () => {
    expect(totalEpisodes).to.be.a("number")
    expect(totalEpisodes).to.be.above(0)
    expect(totalEpisodes).to.equal(13)
  })

  it("showsWithHighRatedEpisodes should find shows with episodes rated >= 9", () => {
    expect(showsWithHighRatedEpisodes.length).to.be.greaterThan(0)
    expect(showsWithHighRatedEpisodes.length).to.equal(2)
  })

  it("getEpisodesByShowAndSeason should list episodes from specific season of a show", () => {
    const episodes = getEpisodesByShowAndSeason("Galaxy Quest", 1)
    expect(episodes).to.include.members(['Pilot', 'Into the Void', "The Wormhole"])
  })

  it("addEpisode should add a new episode", () => {
    const newEp = { episodeNumber: 99, title: "Bonus Episode", rating: 9.5 }
    addEpisode("Galaxy Quest", 1, newEp)
    const episodes = getEpisodesByShowAndSeason("Galaxy Quest", 1)
    expect(episodes).to.include(newEp.title)
    expect(episodes).to.include.members(['Pilot', 'Into the Void', 'The Wormhole', 'Bonus Episode'])
  })

  it("getHighestRatedEpisode should find the highest-rated episode", () => {
    const highest = getHighestRatedEpisode()
    expect(highest.rating).to.be.greaterThan(0)
    expect(highest.rating).to.equal(9.5)
  })

  it("getEpisodesSortedByRating should sort episodes of a show by rating", () => {
    const sorted = getEpisodesSortedByRating("Galaxy Quest")
    expect(sorted[0].rating).to.be.at.least(sorted[1].rating)
    expect(sorted[0].rating).to.equal(9.5)
    expect(sorted[1].rating).to.equal(9.3)
    expect(sorted[2].rating).to.equal(9.1)
    expect(sorted[3].rating).to.equal(9)
    expect(sorted[4].rating).to.equal(8.7)
    expect(sorted[5].rating).to.equal(8.5)
  })

  it("getAverageRatingForShow should get average rating for a show", () => {
    const avg = getAverageRatingForShow("Galaxy Quest")
    expect(parseFloat(avg)).to.be.a("number")
    expect(parseFloat(avg)).to.be.above(0)
    expect(parseFloat(avg)).to.equal(9.02)
  })
})
