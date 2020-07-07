// map Array<[type, playerId, unitiesCount]>
//  type {enum}
//    0: base
//    1: spawner
//    2: fog
//    3: army
//    4: blank
// playerId {number}
// unitiesCount {number}
const [BASE, SPAWNER, FOG, ARMY, BLANK] = [0, 1, 2, 3, 4];

const map = [
  [
    [BASE, 1, 3],
    [SPAWNER, null, null],
    [ARMY, null, null],
    [ARMY, null, null],
    [FOG, null, null],
  ],
  [
    [BLANK, null, null],
    [ARMY, null, null],
    [ARMY, null, null],
    [BLANK, null, null],
    [ARMY, null, null],
  ],
  [
    [ARMY, null, null],
    [ARMY, null, null],
    [BLANK, null, null],
    [ARMY, null, null],
    [ARMY, null, null],
  ],
  [
    [SPAWNER, null, null],
    [ARMY, null, null],
    [BLANK, null, null],
    [BASE, 2, 3],
    [ARMY, null, null],
  ],
  [
    [BLANK, null, null],
    [FOG, null, null],
    [ARMY, null, null],
    [ARMY, null, null],
    [ARMY, null, null],
  ],
];

// playersState Object<[id, name, color, unitiesCount, landsCount]>
const players = {
  1: [1, "dh", "#ff0000", 1736, 43],
  2: [2, "IDK", "#0a10bf", 896, 25],
};

export { map, players };
