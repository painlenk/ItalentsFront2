interface IProps {
  color: string;
  statusBattle: string;
}

export const Pills = ({ color, statusBattle }: IProps) => {
  return (
    <div
      className="text-base text-center font-semibold"
      style={{
        borderColor: color,
        color: color,
        border: "1px solid",
        padding: "8px 12px",
        borderRadius: "16px",
      }}
    >
      <p>{statusBattle}</p>
    </div>
  );
};
