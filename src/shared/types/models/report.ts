export type Report = {
  groupOne: Group[];
  totals: Total[];
};

export type Group = {
  duration: number;
  name: string;
};

export type Total = {
  totalTime: number;
};
