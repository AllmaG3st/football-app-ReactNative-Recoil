import {Player} from './../../types/index';
import {atom, selector} from 'recoil';

const pos2pos: Record<string, string> = {
  Attacker: 'FWD',
  Defender: 'DEF',
  Midfielder: 'MID',
  Goalkeeper: 'GCK',
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0ba202d448mshb409e58a48f79c3p1c685bjsn02945207a101',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  },
};

export const allPlayersState = selector({
  key: 'allPlayersState',
  get: async () => {
    try {
      const response = await fetch(
        'https://api-football-v1.p.rapidapi.com/v3/players?league=4&season=2020',
        options,
      );

      const json = await response.json();

      return json.response.map((entry: any) => ({
        id: entry.player.id,
        name: entry.player.name,
        match: 'SDA v ZCC',
        price: 11_000_000,
        position: pos2pos[entry.statistics[0].games.position],
        totalPoints: 29,
      })) as Player[];
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});

export const positionFilterState = atom({
  key: 'positionFilterState',
  default: [] as string[],
});

export const filteredPlayers = selector({
  key: 'filteredPlayers',
  get: ({get}) => {
    const players = get(allPlayersState);
    const filters = get(positionFilterState);

    if (filters.length === 0) return players;

    return players.filter(player => filters.includes(player.position));
  },
});
