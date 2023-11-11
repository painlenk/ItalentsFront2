export const SkillsBar = () => {
  return (
    <div className="flex justify-between items-center bg-stone-700 w-full p-6 rounded-lg">
      <label className="text-lg">Ataque</label>
      <progress
        max={100}
        value={50}
        className="w-[60%] h-3 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-yellow-400 [&::-moz-progress-bar]:bg-yellow-400"
      />
    </div>
  );
};
