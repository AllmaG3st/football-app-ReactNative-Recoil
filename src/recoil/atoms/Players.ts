import {atom} from 'recoil';

import {players} from 'assets/data/players';
import {Player} from 'types';

export const allPlayersState = atom({
  key: 'allPlayersState',
  default: players,
});

export const positionFilterState = atom({
  key: 'positionFilterState',
  default: [] as string[],
});
