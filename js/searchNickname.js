import { getRegion } from "./getRegion.js"
import { playerRank } from "./playerRank.js"
import { APIKey } from "./APIKey.js"

const playerIcon = document.getElementById('playerIcon')

export async function searchNickname(nickname) {

  const errorMesage = document.getElementById('error')
  const region = getRegion(document.getElementById("region").value)


  try {

    playerIcon.style.backgroundImage = "url('../img/akali.gif')"

    const infoAPI = await fetch(`https://${region}/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${APIKey()}`)

    const infoAPIJson = await infoAPI.json()

    console.log(infoAPIJson)

    const playerInfo = {
      name: infoAPIJson.name,
      level: infoAPIJson.summonerLevel,
      id: infoAPIJson.id,
      icon: infoAPIJson.profileIconId
    }

    console.log(playerInfo)

    playerRank(playerInfo, region)

  } catch(erro) {
    errorMesage.innerText = '* Jogador não encontrado!'
  }

}
