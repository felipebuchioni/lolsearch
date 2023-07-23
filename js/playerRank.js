import { render } from "./render.js"
import { APIKey } from "./APIKey.js"

export async function playerRank(player, region) {

  const searchRank = await fetch(`https://${region}/lol/league/v4/entries/by-summoner/${player.id}?api_key=${APIKey()}`)

  const searchRankJSON = await searchRank.json()

  const rankQueues = []

  for(var i = 0; i < searchRankJSON.length; i++) {
    const queue = searchRankJSON[i].queueType
    const tier = searchRankJSON[i].tier
    const rank = searchRankJSON[i].rank
    const pdl = searchRankJSON[i].leaguePoints

    const queueInfo = {
        queue: queue,
        tier: tier,
        rank: rank,
        pdl: pdl
    }

    rankQueues.push(queueInfo)
  }

  console.log(rankQueues)
  render(player, rankQueues)

}
