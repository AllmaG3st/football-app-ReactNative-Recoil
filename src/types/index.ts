export enum Positions {
  FWD = 'FWD',
  MID = 'MID',
  DEF = 'DEF',
  GCK = 'GCK',
}

export type Player = {
  id: string;
  name: string;
  match: string;
  price: number;
  position: string;
  totalPoints: number;
};
