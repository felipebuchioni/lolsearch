const playerName = document.getElementById('playerName')
const playerLevel = document.getElementById('playerLevel')
const playerIcon = document.getElementById('playerIcon')

const main = document.getElementById("main")


export function render(playerInfo, rankInfo) {

  const allRanksInfo = document.querySelectorAll('.playerInfos')
    
  allRanksInfo.forEach((element) => {
  main.removeChild(element)
})

  playerName.innerText = playerInfo.name
  playerLevel.innerText = 'Level ' + playerInfo.level
  playerIcon.style.backgroundImage = `url('http://ddragon.leagueoflegends.com/cdn/13.14.1/img/profileicon/${playerInfo.icon}.png')`
  playerIcon.style.border = '5px solid var(--fourt--color)'


  for(var i = 0; i < rankInfo.length; i++) {

    let tierImg = ''
    if(rankInfo[i].tier === undefined) {
      tierImg = 'undefined'
    } else {
      tierImg = rankInfo[i].tier.toLowerCase()
    }
  
    let queueType = ''

    switch(rankInfo[i].queue) {
      case "RANKED_TFT_DOUBLE_UP":
        queueType = 'TFT'
        break

      case "RANKED_SOLO_5x5":
        queueType = 'Ranked Solo/Duo'
        break

      case 'CHERRY':
        queueType = '2x2 ARENA'
        break
    }

    const rankSection = document.createElement('section')
    rankSection.classList.add('playerInfos')

    const playerImgRank = document.createElement('div')
    playerImgRank.id = 'playerImgRank'
    playerImgRank.style.backgroundImage = `url(../img/ranked-emblem/emblem-${tierImg}.png)`

    const playerAssets = document.createElement('div')
    playerAssets.classList.add('playerAssets')

    const playerRank = document.createElement('h1')
    playerRank.id = 'playerRank'

    if(rankInfo[i].tier === undefined) {
       playerRank.innerText = 'Unranked'
    } else {
       playerRank.innerText = rankInfo[i].tier
    }
    
    playerRank.style.color = ''

    switch (rankInfo[i].tier) {
      case "IRON":
        playerRank.style.color = 'var(--iron)'
        break

      case "BRONZE":
        playerRank.style.color = 'var(--bronze)'
        break

      case "SILVER":
        playerRank.style.color = 'var(--silver)'
        break

      case "GOLD":
        playerRank.style.color = 'var(--gold)'
        break

      case "PLATINUM":
        playerRank.style.color = 'var(--platinum)'
        break

      case "DIAMOND":
        playerRank.style.color = 'var(--diamond)'
        break

      case "MASTER":
        playerRank.style.color = 'var(--master)'
        break

      case "GRANDMASTER":
        playerRank.style.color = 'var(--gran-master)'
        break

      case "CHALLENGER":
        playerRank.style.color = 'var(--challenger)'
        break

      
    }

    const playerTier = document.createElement('p')
    playerTier.id = 'playerTier'

    if(rankInfo[i].rank === undefined) {
      playerTier.innerText = ''
    } else {
      playerTier.innerText = rankInfo[i].rank
    }
    
    const queueRankType = document.createElement('p')
    queueRankType.id = 'queueType'
    queueRankType.innerText = queueType

    const pdl = document.createElement('p')
    pdl.id = 'pdl'
    pdl.innerText = rankInfo[i].pdl + ' PDL'

    switch (rankInfo[i].tier) {
      case "IRON":
        pdl.style.color = 'var(--iron)'
        break

      case "BRONZE":
        pdl.style.color = 'var(--bronze)'
        break

      case "SILVER":
        pdl.style.color = 'var(--silver)'
        break

      case "GOLD":
        pdl.style.color = 'var(--gold)'
        break

      case "PLATINUM":
        pdl.style.color = 'var(--platinum)'
        break

      case "DIAMOND":
        pdl.style.color = 'var(--diamond)'
        break

      case "MASTER":
        pdl.style.color = 'var(--master)'
        break

      case "GRANDMASTER":
        pdl.style.color = 'var(--gran-master)'
        break

      case "CHALLENGER":
        pdl.style.color = 'var(--challenger)'
        break

      
    }

    playerAssets.append(playerRank, playerTier, queueRankType, pdl)

    rankSection.append(playerImgRank, playerAssets)

    main.appendChild(rankSection)

  }
}
