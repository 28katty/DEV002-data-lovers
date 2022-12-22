import { filter } from '../src/script/data.js';

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
  it('Estresa tu test', () => {
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


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
