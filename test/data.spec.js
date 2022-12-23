import { filter } from '../src/script/data.js';
import { ordenar } from '../src/script/data.js';
import { ordenarZa } from '../src/script/data.js';

const data = [
  {
    id: "Aatrox",
    key: "266",
    name: "Aatrox",
    tags: ["Fighter", "Tank"]
  },
  {
    id: "Bard",
    key: "432",
    name: "Bard",
    tags: ["Support", "Mage"]
  },
  {
    id: "Camille",
    key: "164",
    name: "Camille",
    tags: ["Fighter", "Tank"]
  }, {
    id: "Darius",
    key: "122",
    name: "Darius",
    tags: ["Fighter", "Tank"]
  }, {
    id: "Draven",
    key: "119",
    name: "Draven",
    tags: ["Marksman"]
  }, {
    id: "Evelynn",
    key: "28",
    name: "Evelynn",
    tags: ["Assassin", "Mage"]
  }]

describe('funcion filter', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });
  it('Estresa tu test filtrar', () => {
    expect(filter(data, "")).toBeFalsy();
  });
  it('validar el filtrado de tags', () => {
    expect(filter(data, "Fighter")).toEqual([
      {
        id: "Aatrox",
        key: "266",
        name: "Aatrox",
        tags: ["Fighter", "Tank"]
      }, {
        id: "Camille",
        key: "164",
        name: "Camille",
        tags: ["Fighter", "Tank"]
      }, {
        id: "Darius",
        key: "122",
        name: "Darius",
        tags: ["Fighter", "Tank"]
      }
    ]);
  });
});

describe('funcion ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });
  it('validar el orden de los nombres de los champion', () => {
    let ordenAz = ordenar(data);
    expect(ordenAz[0].name).toEqual('Aatrox');
    expect(ordenAz[1].name).toEqual('Bard');
    expect(ordenAz[2].name).toEqual('Camille');
    expect(ordenAz[3].name).toEqual('Darius');
    expect(ordenAz[4].name).toEqual('Draven');
    expect(ordenAz[5].name).toEqual('Evelynn');
  });
});

describe('funcion ordenarZa', () => {
  it('is a function', () => {
    expect(typeof ordenarZa).toBe('function');
  });
  it('validar el orden en reversa', () => {
    let ordenAz = ordenar(data);
    expect(ordenAz[5].name).toEqual('Evelynn');
    expect(ordenAz[4].name).toEqual('Draven');
    expect(ordenAz[3].name).toEqual('Darius');
    expect(ordenAz[2].name).toEqual('Camille');
    expect(ordenAz[1].name).toEqual('Bard');
    expect(ordenAz[0].name).toEqual('Aatrox');
  });
});

