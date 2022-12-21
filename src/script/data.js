
/*import { peticion } from "./script/data.js";
import { showMenu } from "./script/menu.js";
import { search } from "./script/busqueda.js";
peticion()
showMenu()
search()*/


// funcion  filter
export const filter = (data, textFilter) => {
  const filtertext = data.filter((item) => item.tags.includes(textFilter));
  return filtertext
}
