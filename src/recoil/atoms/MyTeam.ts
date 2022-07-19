import {atom, selector} from 'recoil';

import {Player, Positions} from 'types';

const positions = ['FWD', 'MID', 'DEF', 'GCK'] as Positions[];

export const myTeamState = atom({
  key: 'MyTeamState',
  default: [] as Player[],
});

export const myFormationState = atom({
  key: 'myFormationState',
  default: {
    FWD: 3,
    MID: 3,
    DEF: 4,
    GCK: 1,
  },
});

export const myPlayersByPosition = selector({
  key: 'myPlayersByPosition',
  get: ({get}) => {
    const players = get(myTeamState);
    const formation = get(myFormationState);

    const groupedPlayer: any = {};

    positions.forEach(position => {
      groupedPlayer[position] = players.filter(p => p.position === position);

      for (
        let i = groupedPlayer[position].length;
        i < formation[position];
        i++
      ) {
        groupedPlayer[position].push(null);
      }
    });

    return groupedPlayer;
  },
});
