import { ISkills } from "@/types/pokemon";

interface IProps {
  skill: ISkills;
}

export const SkillsBar = ({ skill }: IProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center  w-[70%]">
      <div className="flex justify-between items-center bg-stone-700 w-full p-6 rounded-lg">
        <span className="text-lg">Ataque</span>
        <progress
          max={100}
          value={skill.attack}
          className="w-[60%] h-3 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-yellow-400 [&::-moz-progress-bar]:bg-yellow-400"
        />
      </div>

      <div className="flex justify-between items-center bg-stone-700 w-full p-6 rounded-lg">
        <label className="text-lg">Resistencia</label>
        <progress
          max={100}
          value={skill.resistance}
          className="w-[60%] h-3 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-yellow-400 [&::-moz-progress-bar]:bg-yellow-400"
        />
      </div>

      <div className="flex justify-between items-center bg-stone-700 w-full p-6 rounded-lg">
        <label className="text-lg">Mobilidade</label>
        <progress
          max={100}
          value={skill.mobility}
          className="w-[60%] h-3  .skills__progress"
        />
      </div>

      <div className="flex justify-between items-center bg-stone-700 w-full p-6 rounded-lg">
        <label className="text-lg">Suporte</label>
        <progress
          max={100}
          value={skill.support}
          className="w-[60%] h-3 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-yellow-400 [&::-moz-progress-bar]:bg-yellow-400"
        />
      </div>

      <div className="flex justify-between items-center bg-stone-700 w-full p-6 rounded-lg">
        <label className="text-lg">pontuação</label>
        <progress
          max={100}
          value={skill.punctuation}
          className="w-[60%] h-3 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-yellow-400 [&::-moz-progress-bar]:bg-yellow-400"
        />
      </div>
    </div>
  );
};
