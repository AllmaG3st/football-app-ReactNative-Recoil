enum Positions {
  FWD,
  MID,
  DEF,
  GCK,
}

export type Player = {
  id: string;
  name: string;
  match: string;
  price: number;
  position: string;
  totalPoints: number;
};
