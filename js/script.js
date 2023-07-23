import { searchNickname } from "./searchNickname.js"

const form = document.querySelector('.formBox')
const searchInput = document.getElementById('nameSearch')
const errorMesage = document.getElementById('error')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  errorMesage.innerText = ''

  const nickname = event.target.elements['nameSearch'].value

  searchInput.value = ''
  console.log(searchNickname(nickname))
})









