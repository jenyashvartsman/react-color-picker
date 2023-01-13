import { useEffect, useState } from "react";
import { ColorCard } from "./components/ColorCard";
import { Settings } from "./components/Settings";
import { randomColors } from "./util/util";

function App() {
  const [colorsCount, setColorsCount] = useState(16);
  const [colors, setColors] = useState(randomColors(colorsCount));

  useEffect(() => resetColors(), [colorsCount]);

  const updateColor = (newColor: string, index: number): void => {
    const currentColors = [...colors];
    currentColors[index] = newColor;
    setColors(currentColors);
  };

  const resetColors = (): void => {
    setColors(randomColors(colorsCount));
  };

  return (
    <main className="container">
      {colors.map((color, index) => (
        <ColorCard
          key={index}
          color={color}
          cardsCount={colorsCount}
          onUpdateColor={(newColor) => updateColor(newColor, index)}
        />
      ))}

      <Settings
        onResetClick={resetColors}
        onCardCountClick={(newCount) => setColorsCount(newCount)}
      />
    </main>
  );
}

export default App;
