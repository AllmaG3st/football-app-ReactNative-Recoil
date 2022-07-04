import {atom} from 'recoil';
import {Player} from 'types';

export const myTeamState = atom({
  key: 'MyTeamState',
  default: [] as Player[],
});
