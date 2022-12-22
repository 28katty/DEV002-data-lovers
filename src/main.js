import { champDat } from './data/lol/lol.js'
import { filter, ordenar, ordenarZa } from './script/data.js'

let championArray = Object.values(champDat[0].data)
console.log(championArray)
peticion()
function peticion(){

  const championUser = (data) => {

    const contenedor = document.getElementById("gallery")
    // const championRandom = data.slice().sort(() => Math.random() - 0.5);

    let cardHTML = "";
      for (const item of data) {
      cardHTML += `
        <div class="gallery__card">
          <div class="gallery__info">
            <img src="${item.splash}" alt="" class="gallery__img" />
            <h2 class="gallery__name">${item.name}</h2>
            <h4 class="gallery__tags">${item.tags}</h4>
          </div>
          <div class="gallery__reverse">
            <h3 class="gallery__surname">${item.title.toUpperCase()}</h3><br>
            <h4 class="gallery__attack">Attack: ${item.info.attack}</h4>
            <h4 class="gallery__defense">Defense: ${item.info.defense}</h4>
            <h4 class="gallery__magic">Magic: ${item.info.magic}</h4>
            <h4 class="gallery__difficulty">Difficulty: ${
              item.info.difficulty
            }</h4>
          </div>
        </div>
    `;
    }
    contenedor.innerHTML = cardHTML;
    }
    championUser(championArray)

    // eventos
    const fighterBtn = document.getElementById('fighter');
    const tankBtn = document.getElementById('tank');
    const mageBtn = document.getElementById('mage');
    const assasinBtn = document.getElementById('assasin');
    const supportBtn = document.getElementById('support');
    const marksmanBtn = document.getElementById('marksman');
    const azBtn = document.getElementById("az")
    const zaBtn = document.getElementById("za")

  // remover elementos
  const removeElement = () => {
    let cards = document.querySelectorAll(".gallery__card");
    cards.forEach((item) => item.remove());
  };

// Eventos de filtrado
fighterBtn.addEventListener("click", () => {
  removeElement()
  const fighterText = filter (championArray,'Fighter')
  championUser(fighterText)
});

tankBtn.addEventListener("click", ()=>{
removeElement()
const tankText = filter(championArray,'Tank')
championUser(tankText)
})

mageBtn.addEventListener("click", ()=>{
removeElement()
const mageText = filter(championArray,'Mage')
championUser(mageText)
})

assasinBtn.addEventListener("click", ()=>{
removeElement()
const assasinText = filter(championArray,'Assassin')
championUser(assasinText)
})

supportBtn.addEventListener("click",()=>{
removeElement()
const supportText = filter(championArray,'Support')
championUser(supportText)
})

marksmanBtn.addEventListener("click",()=>{
removeElement()
const marksmanText = filter(championArray,'Marksman')
championUser(marksmanText)
})


azBtn.addEventListener('click',() => {
removeElement()
let championArray = Object.values(champDat[0].data)
const azSort = ordenar(championArray)
championUser(azSort)
})
zaBtn.addEventListener('click',() => {
removeElement()
let championArray = Object.values(champDat[0].data)
const zaSort = ordenarZa(championArray)
championUser(zaSort)
})

}


