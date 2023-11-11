export interface IPokemon {
  id: number;
  name: string;
  avatar: string;
  description: string;
  level: number;
  stats_battle: string[];
  color: string;
  uri: string;
  skills: ISkills;
  evolutions: any[];
}

export interface ISkills {
  attack: number;
  resistance: number;
  mobility: number;
  punctuation: number;
  support: number;
}
