interface ColorCardProps {
  color: string;
  onUpdateColor: (newColor: string) => void;
}

export function ColorCard(props: ColorCardProps) {
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <input
        type="color"
        value={props.color}
        onChange={(e) => props.onUpdateColor(e.target.value)}
      />
    </div>
  );
}
