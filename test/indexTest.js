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
    // expect to equal to the exact matches
    expect(titles).to.include("Galaxy Quest")
  })

  it("getEpisodeTitlesByShow should return episode titles for a given show", () => {
    const episodes = getEpisodeTitlesByShow("Galaxy Quest")
    // this should test for the exact matches
    // ie include ["ep 1", "ep 2", "ep 3"]
    expect(episodes).to.include("Into the Void")
  })

  it("highRatedEpisodes should find episodes with rating > 9", () => {
    episodes = highRatedEpisodes()
    // this expects that at least one episode has a rating > 9
    // which would allow for lower ratings
    // Needs to be updated
    expect(episodes.some((ep) => ep.rating > 9)).to.be.true
  })

  it("totalEpisodes should count total number of episodes", () => {
    total = totalEpisodes()
    expect(total).to.be.a("number")
    expect(total).to.be.above(0)
    // this needs to be more specific
  })

  it("showsWithHighRatedEpisodes should find shows with episodes rated >= 9", () => {
    const shows = showsWithHighRatedEpisodes()
    expect(shows.length).to.be.greaterThan(0)
    // add tests here
  })

  it("getEpisodesByShowAndSeason should list episodes from specific season of a show", () => {
    const episodes = getEpisodesByShowAndSeason("Galaxy Quest", 1)
    // change this to an equal instead of include
    expect(episodes).to.include("The Wormhole")
  })

  it("addEpisode should add a new episode", () => {
    const newEp = { episodeNumber: 99, title: "Bonus Episode", rating: 9.5 }
    addEpisode("Galaxy Quest", 1, newEp)
    const episodes = getEpisodesByShowAndSeason("Galaxy Quest", 1)
    // change this to an equal instead of include
    expect(episodes).to.include("Bonus Episode")
  })

  it("getHighestRatedEpisode should find the highest-rated episode", () => {
    const highest = getHighestRatedEpisode()
    expect(highest.rating).to.be.greaterThan(0)
    // this needs to be more specific
  })

  it("getEpisodesSortedByRating should sort episodes of a show by rating", () => {
    const sorted = getEpisodesSortedByRating("Galaxy Quest")
    expect(sorted[0].rating).to.be.at.least(sorted[1].rating)
    // this needs to be more specific
  })

  it("getAverageRatingForShow should get average rating for a show", () => {
    const avg = getAverageRatingForShow("Galaxy Quest")
    expect(parseFloat(avg)).to.be.a("number")
    expect(parseFloat(avg)).to.be.above(0)
    // this needs to be more specific
  })
})
