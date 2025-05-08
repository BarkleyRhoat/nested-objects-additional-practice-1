const gameObject = () => {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    number: 30,
                    shoe: 14,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }

            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }

            }
        }
    }
}

const teamNames = () => {
    return Object.keys(gameObject())
}

const getTeam = (teamName) => {
    return gameObject()[teamName]
}

const awayTeam = { ...getTeam("away") }
const homeTeam = { ...getTeam("home") }

const allPlayers = { ...awayTeam.players, ...homeTeam.players }

const playerStats = (playerName) => {
    return allPlayers[playerName]
}

const getPlayerAttribute = (attribute, playerObj) => {
    return playerObj[attribute]
}

const numPointsScored = (playerName) => {
    return getPlayerAttribute("points", playerStats(playerName))
}

const shoeSize = (playerName) => {
    return getPlayerAttribute("shoe", playerStats(playerName))
}

const teamColors = (teamName) => {
    return getTeam(teamName).colors
}

const playerNumbers = (teamName) => {
    const jerseyNumbers = [];
    for (const player in getTeam(teamName).players) {
        jerseyNumbers.push(allPlayers[player].number)
    }
    return jerseyNumbers
}

const allStats = (stat, teamToSearch = allPlayers) => {
    const stats = []
    for (const player in teamToSearch) {
        stats.push(Number.parseInt(teamToSearch[player][stat]))
    }
    console.log('stats', stats)
    return stats
}

const getMaxStat = (stat) => {
    return Math.max(...allStats(stat))
}

const playerWithMax = (stat) => {
    const maxStat = getMaxStat(stat)
    console.log('maxStat', maxStat)
    for (const playerName in allPlayers) {
        if (allPlayers[playerName][stat] === maxStat) {
            return playerName
        }
    }
}

const bigShoeRebounds = () => {
    return allPlayers[playerWithMax('shoe')].rebounds
}

const mostPointsScored = () => {
    return playerWithMax('points')
}

const winningTeam = () => {
    const homePoints = Object.values(homeTeam.players).reduce((sum, player) => sum + player.points, 0);
    const awayPoints = Object.values(awayTeam.players).reduce((sum, player) => sum + player.points, 0);
    return homePoints > awayPoints ? "Home!" : "Away!";
}

const playerWithLongestName = () => {
    let longestNameNum = 0;
    let longestNamePlayer;
    for (const player in allPlayers) {
        if (player.length > longestNameNum) {
            longestNameNum = player.length
            longestNamePlayer = player
        }
    }
    return longestNamePlayer
}

const doesLongNameStealATon = () => {
    const maxSteals = getMaxStat('steals')
    return getPlayerAttribute('steals', allPlayers[playerWithLongestName()]) === maxSteals ? true : false
}

console.log("Brendan Haywood points: ", numPointsScored("Brendan Haywood"))
console.log("Brendan Haywood shoes: ", shoeSize("Brendan Haywood"))
console.log('home colors', teamColors('home'))
console.log('away colors', teamColors('away'))
console.log('team names', teamNames())
console.log('playerNumbers', playerNumbers('home'))
console.log('playerNumbers', playerNumbers('away'))
console.log('playerStats', playerStats('Brendan Haywood'))
console.log("bigShoeRebounds", bigShoeRebounds())
console.log('most points', mostPointsScored())
console.log('winning team', winningTeam())
console.log('longest name', playerWithLongestName())
console.log('longest name steals a ton', doesLongNameStealATon())









