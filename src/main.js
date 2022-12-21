import { champDat } from './data/lol/lol.js'
import { filter } from './script/data.js'


const championArray = Object.values(champDat[0].data)
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

  // ordenar
  const ordenar = (data) => {
    const ordenarAz = data.slice().sort((a,b) => {
      if (a[0] < b[0]) {
    return -1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  return 0;
    })
    championUser(ordenarAz)
  }

// Eventos de filtrado
fighterBtn.addEventListener("click", () => {
  removeElement()
  const filText = filter (championArray,'Fighter')
  championUser(filText)
});

tankBtn.addEventListener("click", ()=>{
removeElement()
filter(championArray,'Tank')
})

mageBtn.addEventListener("click", ()=>{
removeElement()
filter(championArray,'Mage')
})

assasinBtn.addEventListener("click", ()=>{
removeElement()
filter(championArray,'Assassin')
})

supportBtn.addEventListener("click",()=>{
removeElement()
filter(championArray,'Support')
})

marksmanBtn.addEventListener("click",()=>{
removeElement()
filter(championArray,'Marksman')
})


azBtn.addEventListener('click',() => {
removeElement()
// championUser(championArray)
championUser(championArray.slice().sort())
})
zaBtn.addEventListener('click',() => {
removeElement()
championUser(championArray.slice().reverse())
})



}


