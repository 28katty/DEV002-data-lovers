
/*import { peticion } from "./script/data.js";
import { showMenu } from "./script/menu.js";
import { search } from "./script/busqueda.js";
peticion()
showMenu()
search()*/


// funcion  filter
export const filter = (data, textFilter) => {
  if(textFilter === ""){
    return false
  }
  // console.log(data, 15);
  const filtertext = data.filter((item) => item.tags.includes(textFilter));
  // console.log(filtertext);
  return filtertext
}

  // ordenar
  export const ordenar = (data) => {
    const ordenarAz = data.sort()
    return ordenarAz
  }
  export const ordenarZa = (data) => {
    const ordenarZa = data.reverse()
    return ordenarZa
  }

