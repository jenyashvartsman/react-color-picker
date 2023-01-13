import { useRef } from "react";

interface ColorCardProps {
  color: string;
  onUpdateColor: (newColor: string) => void;
  cardsCount: number;
}

export function ColorCard(props: ColorCardProps) {
  const colorInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`card card--${props.cardsCount}`}
      style={{ backgroundColor: props.color }}
    >
      {/* color change */}
      <button
        className="card__button"
        onClick={() => colorInputRef.current?.click()}
      >
        {props.color}
      </button>

      {/* color input */}
      <input
        type="color"
        className="card__input"
        ref={colorInputRef}
        value={props.color}
        onChange={(e) => props.onUpdateColor(e.target.value)}
      />
    </div>
  );
}
