import { useState } from "react";

interface SettingsProps {
  onResetClick: () => void;
  onCardCountClick: (newCount: number) => void;
}

export function Settings(props: SettingsProps) {
  const [open, setOpen] = useState(false);

  const cardCountOptions = [4, 8, 16];

  const resetClick = (): void => {
    setOpen(false);
    props.onResetClick();
  };

  const cardCountClick = (newCount: number): void => {
    setOpen(false);
    props.onCardCountClick(newCount);
  };

  return (
    <div className={`settings ${open ? "settings--open" : ""}`}>
      {/* menu */}
      <ul className="settings__menu">
        {cardCountOptions.reverse().map((option) => (
          <li
            key={option}
            className="settings__menu__item"
            onClick={() => cardCountClick(option)}
          >
            {option}
          </li>
        ))}
        <li className="settings__menu__item" onClick={resetClick}>
          Reset
        </li>
      </ul>

      {/* button */}
      <img
        src="/img/cog.svg"
        className="settings__button"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}
