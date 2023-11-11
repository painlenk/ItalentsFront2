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

interface ISkills {
  ataque: number;
  resistência: number;
  mobilidade: number;
  pontuação: number;
  suporte: number;
}
