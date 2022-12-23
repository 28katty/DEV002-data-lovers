// funcion  filter
export const filter = (data, textFilter) => {
  //igual a vacio para el estres
  if(textFilter === ""){
    return false
  }
  const filtertext = data.filter((item) => item.tags.includes(textFilter));
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
